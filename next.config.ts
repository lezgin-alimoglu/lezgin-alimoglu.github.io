/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Statik export modu
  images: {
    unoptimized: true,   // GitHub Pages'de resim optimizasyonu çalışmaz
  },
  // EĞER siten lezgin.github.io/portfolio gibi bir alt klasördeyse:
  // basePath: '/portfolio', 
};

export default nextConfig;