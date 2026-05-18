import type { NextConfig } from "next";
import path from "path";

// Obtener origins permitidos desde variable de entorno, con fallback para desarrollo
const getAllowedOrigins = (): string[] => {
  const envOrigins = process.env.NEXT_PUBLIC_APP_URL;
  if (envOrigins) {
    return envOrigins.split(',').map(o => o.trim());
  }
  // En desarrollo permitir localhost
  return [
    'http://localhost:3000',
    'http://localhost:3001',
  ];
};

// Version: 3.18.0 - Security hardening + quality improvements
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: false,
  // Permitir requests cross-origin en desarrollo (red local, IP dinámica)
  allowedDevOrigins: ['http://192.168.1.153:3000'],
  experimental: {
    serverActions: {
      allowedOrigins: getAllowedOrigins(),
    },
  },
  // Fix Windows case-insensitive path causing duplicate React instances
  webpack: (config) => {
    // Force single React instance across all bundles (client + server)
    const reactPath = path.resolve(process.cwd(), 'node_modules/react');
    const reactDomPath = path.resolve(process.cwd(), 'node_modules/react-dom');
    const schedulerPath = path.resolve(process.cwd(), 'node_modules/scheduler');
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': reactPath,
      'react-dom/client': path.join(reactDomPath, 'client.js'),
      'react-dom/server': path.join(reactDomPath, 'server.js'),
      'react-dom/server.browser': path.join(reactDomPath, 'server.browser.js'),
      'react-dom': reactDomPath,
      'scheduler': schedulerPath,
    };
    // Prevent symlink resolution issues on Windows
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
