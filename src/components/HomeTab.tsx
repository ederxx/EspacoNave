import React from "react";
import { Rocket } from "lucide-react";
import Navigation from "./Navigation";
import { useNavigation } from "../components/NavigationContext";

const HomeTab: React.FC = () => {
  const { activeTab } = useNavigation();
  const videoId = "AmDt4O-7RO8";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative pb-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white sb-4 glow-text flex items-center justify-center gap-4">
          <Rocket className="text-blue-400" size={50} />
          ESPAÇO NAVE
          <Rocket className="text-purple-400" size={50} />
        </h1>
        <p className="text-sg text-white/80">Produtora Musical</p>
      </div>

      {/* Diminuindo o tamanho do vídeo e garantindo margem para o menu */}
      <div className="w-full max-w-3xl mb-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="aspect-[16/9] w-full h-[330px] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Vídeo Principal - Espaço Nave"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* 🚀 O menu agora ficará visível dentro da área da tela */}

    </div>
  );
};

export default HomeTab;
