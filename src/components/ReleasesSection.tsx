import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Rocket } from "lucide-react";

const ReleasesSection: React.FC = () => {
  // Lançamentos reais com os títulos das faixas corretos
  const releases = [
    {
      id: "1",
      title: "Mente Blindada",
      artist: "Pivete Nobre",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=U8DNlWQdySY",
    },
    {
      id: "2",
      title: "A Cultura Venceu",
      artist: "Pivete Nobre",
      platform: "youtube",
      url: "https://www.youtube.com/watch?v=Ng9TjCAgdd4",
    },
    {
      id: "3",
      title: "Porto da Barra",
      artist: "Pivete Nobre",
      platform: "spotify",
      url: "https://open.spotify.com/intl-pt/track/38gJrcw5c9YtGLvrYQgAM4?si=f964ed97938e4d5d",
    },
    {
      id: "4",
      title: "Espaço Nave",
      artist: "Pivete Nobre",
      platform: "spotify",
      url: "https://open.spotify.com/intl-pt/track/3yYvHH9UNLx7fvRUrBb47n?si=9368d0bd674942ae",
    },
    {
      id: "5",
      title: "Perfil",
      artist: "Pivete Nobre",
      platform: "spotify",
      url: "https://open.spotify.com/intl-pt/track/4mGz0LSssaNVcc4UfBmiNR?si=cc20842808294fa4",
    },
    {
      id: "6",
      title: "Dali de Onde Eu Venho",
      artist: "Pivete Nobre",
      platform: "spotify",
      url: "https://open.spotify.com/intl-pt/track/6JCmCSQvs9wuHZeEPwo33u?si=d9a599c60f814c0d",
    },
    {
      id: "7",
      title: "Mil Faces",
      artist: "Pivete Nobre",
      platform: "spotify",
      url: "https://open.spotify.com/intl-pt/track/65UVqIgYsLI1SqHJPf6k53?si=8d6ba92c6ee84135",
    },
  ];

  const handleOpenLink = (url: string, title: string) => {
    window.open(url, "_blank");
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "spotify":
        return "bg-green-600";
      case "youtube":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-2xl flex items-center gap-2">
          <Rocket className="text-purple-500" />
          Últimos Lançamentos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {releases.map((release) => (
            <div key={release.id} className="bg-white/5 rounded-lg p-4 flex justify-between items-center border border-white/10">
              <div>
                <h4 className="text-white font-semibold">{release.title}</h4>
                <p className="text-white/70">por {release.artist}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-white text-xs px-3 py-1 rounded-full ${getPlatformColor(release.platform)}`}>
                  {release.platform.charAt(0).toUpperCase() + release.platform.slice(1)}
                </span>
                <Button
                  onClick={() => handleOpenLink(release.url, release.title)}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Ouvir
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReleasesSection;