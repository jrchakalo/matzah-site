'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { data, error: authError } = await signIn(email, password);

    if (authError || !data.session) {
      setError('Email ou senha incorretos');
      setLoading(false);
      return;
    }

    // Autenticação bem-sucedida
    router.push('/admin/dashboard');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--background)] px-4 relative dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
      {/* Botão Voltar */}
      <Link
        href="/blog"
        className="absolute top-6 right-6 flex items-center gap-2 text-[color:var(--text-secondary)] hover:text-[color:var(--foreground)] transition-colors text-sm dark:text-gray-400 dark:hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Voltar para Blog
      </Link>

      <div className="max-w-md w-full">
        <div className="bg-[color:var(--surface)] backdrop-blur-sm border border-[color:var(--border-color)] rounded-2xl p-8 shadow-2xl dark:bg-gray-800/50 dark:border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[color:var(--foreground)] mb-2 dark:text-white">Área Administrativa</h1>
            <p className="text-[color:var(--text-secondary)] dark:text-gray-400">Gerenciar artigos do blog</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] placeholder:text-[color:var(--input-placeholder)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-primary)] focus:border-transparent dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[color:var(--text-secondary)] mb-2 dark:text-gray-300">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[color:var(--input-bg)] border border-[color:var(--border-color)] rounded-lg text-[color:var(--foreground)] placeholder:text-[color:var(--input-placeholder)] focus:outline-none focus:ring-2 focus:ring-[color:var(--action-primary)] focus:border-transparent dark:bg-gray-900/50 dark:border-gray-600 dark:text-white dark:placeholder-gray-500"
                placeholder="Digite sua senha"
                required
              />
            </div>

            {error && (
              <div className="bg-[color:var(--action-primary)]/10 border border-[color:var(--action-primary)]/40 text-[color:var(--action-primary)] px-4 py-3 rounded-lg text-sm dark:bg-red-500/10 dark:border-red-500 dark:text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[color:var(--action-primary)] via-[color:var(--action-secondary)] to-[color:var(--highlight)] hover:from-[color:var(--action-primary-hover)] hover:via-[color:var(--action-secondary)] hover:to-[color:var(--highlight)] text-white font-semibold py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>

          <p className="text-center text-[color:var(--text-tertiary)] text-sm mt-6 dark:text-gray-500">
            Acesso restrito a funcionários autorizados
          </p>
        </div>
      </div>
    </div>
  );
}
