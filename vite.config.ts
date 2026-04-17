import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import tailwindcss from '@tailwindcss/vite'; // Vite plugin for Tailwind

// List of all routes based on your provided paths
const routes = [
  '/',
  '/about-us/introduction',
  '/about-us/message-from-chairperson',
  '/about-us/message-from-managing-director',
  '/about-us/principal-message',
  '/about-us/board-of-directors',
  '/about-us/examinations',
  '/about-us/rules-and-discipline',
  '/facilities',
  '/extra-curricular-activities',
  '/achievement/recent-achievements',
  '/achievement/co-curricular',
  '/achievement/disciplinary-action',
  '/achievement/recommendations',
  '/gallery/photos',
  '/gallery/videos',
  '/policy',
  '/news-events',
  '/calendar',
  '/contact',
  '/about-us/chairman' // New Page Added
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ 
      hostname: 'https://kns.edu.np', // Use your official school domain here
      dynamicRoutes: routes,
      generateRobotsTxt: true,
      // Helps search engines know the school site is updated frequently
      changefreq: 'weekly', 
      priority: 1.0,
    }),
  ],

  build: {
    // Ensuring the output directory matches your Vercel settings
    target: 'es2015',
    outDir: 'dist', 
  }
});