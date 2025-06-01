
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Music, MessageCircle, Rocket } from 'lucide-react';
import { Artist } from './ArtistCard';

interface ArtistModalProps {
  artist: Artist | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ artist, isOpen, onClose }) => {
  if (!artist) return null;

  const handleWhatsAppContact = () => {
    const message = `Olá! Gostaria de entrar em contato sobre o artista ${artist.name}.`;
    const whatsappUrl = `https://wa.me/${artist.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-black/90 backdrop-blur-lg border border-white/20 text-white">
        {/* Ícones decorativos espaciais */}
        <div className="absolute top-4 left-4 text-blue-400/30 animate-pulse">
          <Rocket size={20} />
        </div>
        <div className="absolute top-4 right-4 text-purple-400/30 animate-bounce">
        </div>
        
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <Rocket className="text-blue-400" size={32} />
            {artist.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Coluna Esquerda - Centralizada */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={artist.photo} 
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Ícones das Redes Sociais */}
            <div className="flex justify-center space-x-4">
              {artist.socialLinks.instagram && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(artist.socialLinks.instagram, '_blank')}
                  className="border-pink-500/50 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400"
                >
                  <Instagram size={20} />
                </Button>
              )}
              {artist.socialLinks.twitter && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(artist.socialLinks.twitter, '_blank')}
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400"
                >
                  <Twitter size={20} />
                </Button>
              )}
              {artist.socialLinks.spotify && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(artist.socialLinks.spotify, '_blank')}
                  className="border-green-500/50 text-green-400 hover:bg-green-500/20 hover:border-green-400"
                >
                  <Music size={20} />
                </Button>
              )}
            </div>
            
            {/* Botão WhatsApp Centralizado */}
            <Button
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-green-600 hover:bg-green-700 flex items-center gap-3 px-8 py-3"
            >
              <MessageCircle size={20} />
              Contato via WhatsApp
            </Button>

            {/* Ícones decorativos adicionais */}
            <div className="flex items-center justify-center space-x-8 mt-4">
              <Rocket className="text-blue-400/50 animate-pulse" size={24} />
              <Rocket className="text-green-400/50 animate-pulse" size={24} />
            </div>
          </div>
          
          {/* Coluna Direita */}
          <div className="space-y-6">
            {artist.spotifyEmbedId && (
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Music className="text-green-400" size={20} />
                  Spotify
                </h4>
                <iframe
                  src={`https://open.spotify.com/embed/artist/${artist.spotifyEmbedId}?utm_source=generator`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            )}
            
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                Sobre o Artista
              </h4>
              <p className="text-white/90 leading-relaxed text-lg">
                {artist.bio}
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
              
              </div>
            </div>
          </div>
        </div>

        {/* Ícones decorativos inferiores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Rocket className="text-blue-400/20 animate-pulse" size={16} />
          <Rocket className="text-green-400/20 animate-pulse" size={16} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtistModal;
