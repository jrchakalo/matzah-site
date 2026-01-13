'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createPost, uploadImage, checkAuth } from '@/lib/supabase';
import Link from 'next/link';

export default function NovoPost() {
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    slug: '',
    category: 'Financiamento',
    read_time: '5 min',
    excerpt: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    author: 'Equipe Matzah',
    featured: false,
    cover_image: '',
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.push('/admin');
      }
    };

    checkAuthentication();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createPost(form);
      alert('Post criado com sucesso!');
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Erro ao criar post:', error);
      alert('Erro ao criar post. Verifique se configurou o Supabase.');
    }

    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      setForm({ ...form, cover_image: url });
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload da imagem');
    }
    setUploading(false);
  };

  // Gera slug automaticamente do título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Novo Post</h1>
          <Link
            href="/admin/dashboard"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Voltar
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Título do Post *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ 
                  ...form, 
                  title: e.target.value,
                  slug: generateSlug(e.target.value)
                })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="Ex: Como Conseguir Financiamento para Seu Primeiro Imóvel"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoria *
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
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
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tempo de Leitura
                </label>
                <input
                  type="text"
                  value={form.read_time}
                  onChange={(e) => setForm({ ...form, read_time: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  placeholder="5 min"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Resumo (aparece na listagem) *
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none"
                rows={3}
                placeholder="Breve descrição do que será abordado no post..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Imagem de Capa (opcional)
              </label>
              <div className="flex gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-accent-blue file:text-white file:cursor-pointer hover:file:bg-accent-blue/90"
                />
              </div>
              {uploading && <p className="text-sm text-gray-400 mt-2">Fazendo upload...</p>}
              {form.cover_image && (
                <div className="relative mt-4 w-full max-w-md h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={form.cover_image} 
                    alt="Preview" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Conteúdo do Post * (Suporta Markdown)
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue resize-none font-mono text-sm"
                rows={20}
                placeholder="Escreva o conteúdo do post aqui usando Markdown:&#10;&#10;## Título Principal&#10;### Subtítulo&#10;&#10;**Texto em negrito**&#10;*Texto em itálico*&#10;&#10;- Item de lista&#10;- Outro item&#10;&#10;✔️ Use emojis à vontade"
                required
              />
              <p className="text-sm text-gray-400 mt-2">
                ✨ Dicas: Use ## para títulos | ** para negrito | * para itálico | - para listas
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Autor
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Data de Publicação
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading || uploading}
              className="px-6 py-3 bg-gradient-to-r from-[#DD0000] via-[#F77F00] to-[#FCBF49] hover:from-[#c20000] hover:via-[#e57400] hover:to-[#e5ad3d] text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'Publicando...' : 'Publicar Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
