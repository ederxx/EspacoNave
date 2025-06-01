import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, MessageCircle } from "lucide-react";

const BeatsSection: React.FC = () => {
  // Beats mockados - você pode substituir depois
  const beats = [
    {
      id: "1",
      title: "Porto da Barra",
      price: "R$ 150",
      audioId: "22391377", // ID do BeatStars para incorporação
      description: "Beat afro pesado com sintetizadores espaciais",
    },
    {
      id: "2",
      title: "Imoral",
      price: "R$ 120",
      audioId: "22390582", // Substitua pelo ID correto do BeatStars
      description: "Beat melódico DRILL com batidas envolventes",
    },
    {
      id: "3",
      title: "Iemanja",
      price: "R$ 180",
      audioId: "22341133", // Substitua pelo ID correto do BeatStars
      description: "Afrobeat com elementos futuristas",
    },
  ];

  const handleNegotiate = (beatTitle: string) => {
    const message = `Olá! Gostaria de negociar o beat "${beatTitle}" da Espaço Nave.`;
    const whatsappUrl = `https://wa.me/5571987034640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-2xl flex items-center gap-2">
          <Play className="text-green-500" />
          Catálogo de Beats à Venda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beats.map((beat) => (
            <div key={beat.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="mb-3">
                <h4 className="text-white font-semibold text-lg mb-1">{beat.title}</h4>
                <p className="text-white/70 text-sm mb-2">{beat.description}</p>
                <p className="text-green-400 font-bold text-xl">{beat.price}</p>
              </div>

              {/* Player embutido do BeatStars */}
              <iframe
                src={`//www.beatstars.com/embed/track/?id=${beat.audioId}`}
                width="100%"
                height="140"
                style={{ border: "none", borderRadius: "12px" }}
              ></iframe>

              {/* Botão para negociar */}
              <Button
                onClick={() => handleNegotiate(beat.title)}
                size="sm"
                className="bg-green-600 hover:bg-green-700 w-full mt-3"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                Negocie Agora
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BeatsSection;