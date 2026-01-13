'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAllPostsFromDB, deletePost, type BlogPost, checkAuth, signOut } from '@/lib/supabase';
import Link from 'next/link';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.push('/admin');
        return;
      }

      loadPosts();
    };

    checkAuthentication();
  }, [router]);

  const loadPosts = async () => {
    setLoading(true);
    const data = await getAllPostsFromDB();
    setPosts(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja deletar este post?')) return;

    setDeleting(id);
    try {
      await deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    } catch (error) {
      console.error('Erro ao deletar:', error);
      alert('Erro ao deletar post');
    }
    setDeleting(null);
  };

  const handleLogout = async () => {
    await signOut();
    router.push('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Gerenciar Blog</h1>
          <div className="flex gap-4">
            <Link
              href="/admin/dashboard/novo"
              className="bg-gradient-to-r from-[#DD0000] via-[#F77F00] to-[#FCBF49] hover:from-[#c20000] hover:via-[#e57400] hover:to-[#e5ad3d] text-white px-6 py-2 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              + Novo Post
            </Link>
            <button
              onClick={handleLogout}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">Nenhum post criado ainda</p>
            <Link
              href="/admin/dashboard/novo"
              className="inline-block bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Criar Primeiro Post
            </Link>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Título</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Categoria</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Data</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {post.cover_image && (
                          <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                            <Image 
                              src={post.cover_image} 
                              alt="" 
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-white">{post.title}</p>
                          <p className="text-sm text-gray-400 line-clamp-1">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{post.category}</td>
                    <td className="px-6 py-4 text-gray-300">
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/dashboard/editar/${post.id}`}
                          className="bg-[#DD0000] hover:bg-[#F77F00] text-white px-4 py-2 rounded transition-all text-sm shadow hover:shadow-lg"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          disabled={deleting === post.id}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm disabled:opacity-50"
                        >
                          {deleting === post.id ? 'Deletando...' : 'Deletar'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
