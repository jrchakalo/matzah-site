'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { getAllPostsFromDB, updatePost, uploadImage, type BlogPost, checkAuth } from '@/lib/supabase';
import Link from 'next/link';

export default function EditarPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  useEffect(() => {
    const loadPost = async () => {
      const posts = await getAllPostsFromDB();
      const found = posts.find(p => p.id === postId);
      if (found) {
        setPost(found);
      } else {
        alert('Post não encontrado');
        router.push('/admin/dashboard');
      }
    };

    const checkAuthentication = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.push('/admin');
        return;
      }

      await loadPost();
    };

    checkAuthentication();
  }, [router, postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    setLoading(true);
    try {
      await updatePost(post.id, {
        title: post.title,
        slug: post.slug,
        category: post.category,
        read_time: post.read_time,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        author: post.author,
        featured: post.featured,
        cover_image: post.cover_image,
      });
      alert('Post atualizado com sucesso!');
      router.push('/admin/dashboard');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erro ao atualizar post:', error);
      }
      alert('Erro ao atualizar post');
    }
    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !post) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      setPost({ ...post, cover_image: url });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erro ao fazer upload:', error);
      }
      alert('Erro ao fazer upload da imagem');
    }
    setUploading(false);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[color:var(--background)] flex items-center justify-center dark:bg-black">
        <div className="text-[color:var(--foreground)] text-xl dark:text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--background)] dark:bg-black">
      <div className="bg-[color:var(--surface)] border-b border-[color:var(--border-color)] dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[color:var(--foreground)] dark:text-white">Editar Post</h1>
          <Link
            href="/admin/dashboard"
            className="bg-[color:var(--surface-alt)] hover:bg-[color:var(--surface-soft)] text-[color:var(--foreground)] px-6 py-2 rounded-lg transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            Voltar
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[color:var(--surface)] rounded-lg border border-[color:var(--border-color)] p-6 space-y-6 dark:bg-gray-900 dark:border-gray-800">
            <div>
              <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Título do Post *
              </label>
              <input
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                  Categoria *
                </label>
                <select
                  value={post.category}
                  onChange={(e) => setPost({ ...post, category: e.target.value })}
                  className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  <option>Financiamento</option>
                  <option>Avaliação</option>
                  <option>Desenvolvimento</option>
                  <option>Investimento</option>
                  <option>Sustentabilidade</option>
                  <option>Planejamento</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                  Tempo de Leitura
                </label>
                <input
                  type="text"
                  value={post.read_time}
                  onChange={(e) => setPost({ ...post, read_time: e.target.value })}
                  className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Resumo *
              </label>
              <textarea
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Imagem de Capa (opcional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[color:var(--action-primary)] file:text-white file:cursor-pointer hover:file:bg-[color:var(--action-primary-hover)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              {uploading && <p className="text-sm text-[color:var(--text-tertiary)] mt-2 dark:text-gray-400">Fazendo upload...</p>}
              {post.cover_image && (
                <div className="mt-4">
                  <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden">
                    <Image 
                      src={post.cover_image} 
                      alt="Preview" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setPost({ ...post, cover_image: '' })}
                    className="mt-2 text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                  >
                    Remover imagem
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Conteúdo do Post * (Suporta Markdown)
              </label>
              <textarea
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] resize-none font-mono text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                rows={20}
                required
              />
              <p className="text-sm text-[color:var(--text-tertiary)] mt-2 dark:text-gray-400">
                ✨ Dicas: Use ## para títulos | ** para negrito | * para itálico | - para listas
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                  Autor
                </label>
                <input
                  type="text"
                  value={post.author}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Data de Publicação
                </label>
                <input
                  type="date"
                  value={post.date}
                  onChange={(e) => setPost({ ...post, date: e.target.value })}
                  className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-secondary)] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 bg-[color:var(--surface-alt)] hover:bg-[color:var(--surface-soft)] text-[color:var(--foreground)] rounded-lg transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading || uploading}
              className="px-6 py-3 bg-gradient-to-r from-[color:var(--action-primary)] via-[color:var(--action-secondary)] to-[color:var(--highlight)] hover:from-[color:var(--action-primary-hover)] hover:via-[color:var(--action-secondary)] hover:to-[color:var(--highlight)] text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
