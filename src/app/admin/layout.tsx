'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Esconde Header, Footer e WhatsApp nas páginas admin
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const whatsapp = document.querySelector('[aria-label*="WhatsApp"], [class*="whatsapp"]');
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (whatsapp) (whatsapp as HTMLElement).style.display = 'none';
    
    return () => {
      // Restaura ao sair
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (whatsapp) (whatsapp as HTMLElement).style.display = '';
    };
  }, [pathname]);
  
  return <div className="min-h-screen">{children}</div>;
}
