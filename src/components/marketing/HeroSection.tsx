import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Elementos decorativos de fondo (Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-emerald-400 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Inteligencia Artificial para tu Negocio
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
          El futuro de la gestión, <br className="hidden lg:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
            automatizado y simple.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-12">
          Nefetech conecta todos tus sistemas en un único ecosistema multi-tenant impulsado por IA. Olvídate del trabajo manual y enfócate en crecer.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Comenzar Gratis
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Agendar Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
