import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Matzah Empreendimentos & Construções',
    short_name: 'Matzah',
    description: 'Imobiliária e Construção em Bezerros-PE com fé, transparência e excelência',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#D00000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
