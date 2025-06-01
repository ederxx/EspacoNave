
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export interface Artist {
  id: string;
  name: string;
  photo: string;
  musicLink: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
  };
  spotifyEmbedId?: string;
  bio: string;
  whatsapp: string;
}

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
      <div onClick={onClick} className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
          <img 
            src={artist.photo} 
            alt={artist.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
      </div>
      
      <div className="flex justify-center">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            window.open(artist.musicLink, '_blank');
          }}
          className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 flex items-center gap-2"
        >
          <Play size={16} />
          Play
        </Button>
      </div>
    </div>
  );
};

export default ArtistCard;
