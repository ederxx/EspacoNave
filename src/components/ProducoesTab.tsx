
import React from 'react';
import { Rocket } from 'lucide-react';
import VideoSection from './VideoSection';
import BeatsSection from './BeatsSection';
import ReleasesSection from './ReleasesSection';

const ProducoesTab: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative">
      {/* Ícones de foguete decorativos */}
      <div className="absolute top-24 left-8 text-white/20 animate-bounce">
        <Rocket size={20} />
      </div>
      <div className="absolute top-32 right-12 text-white/25 animate-pulse">
        <Rocket size={24} />
      </div>
      <div className="absolute bottom-40 left-20 text-white/30 animate-bounce">
        <Rocket size={18} />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-white text-center mb-12 glow-text flex items-center justify-center gap-4">
          <Rocket className="text-blue-400" size={40} />
          Nossas Produções
          <Rocket className="text-purple-400" size={40} />
        </h2>

        <VideoSection />
        <BeatsSection />
        <ReleasesSection />
      </div>
    </div>
  );
};

export default ProducoesTab;
