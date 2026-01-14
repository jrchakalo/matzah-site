import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Matzah Empreendimentos & Construções',
    short_name: 'Matzah',
    description: 'Imobiliária e Construção em Bezerros-PE com fé, transparência e excelência',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#DD0000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
