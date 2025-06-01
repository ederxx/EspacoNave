
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ArtistCard, { Artist } from './ArtistCard';
import ArtistModal from './ArtistModal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ArtistasTab: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados de exemplo dos artistas
  const artists: Artist[] = [
    {
      id: '1',
      name: 'Pivete Nobre',
      photo: 'https://i.ibb.co/nqX4v0F6/pvnobre.jpg',
      musicLink: 'https://open.spotify.com/intl-pt/artist/26bQwhpZ9s1feRnvyLLV1D?si=IfjO0fMaSPWkEmlGK6XYrg',
      socialLinks: {
        instagram: 'https://www.instagram.com/pivetenobre/',
        twitter: 'https://twitter.com',
        spotify: 'https://open.spotify.com/intl-pt/artist/26bQwhpZ9s1feRnvyLLV1D?si=IfjO0fMaSPWkEmlGK6XYrg'
      },
      spotifyEmbedId: '26bQwhpZ9s1feRnvyLLV1D',
      bio: 'Pivete Nobre é rapper, MC, produtor e tatuador. Filho das ruas de Cajazeiras 10, em Salvador (BA), construiu sua identidade artística a partir das vivências e influências da cultura urbana',
      whatsapp: '5571987034640'
    },
    {
      id: '2',
      name: 'DJ Exemplo',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      musicLink: 'https://spotify.com',
      socialLinks: {
        instagram: 'https://instagram.com',
        spotify: 'https://spotify.com'
      },
      bio: 'DJ experiente com sets únicos que movimentam as pistas de dança.',
      whatsapp: '5571987034640'
    },
    {
      id: '3',
      name: 'Cantor Exemplo',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      musicLink: 'https://spotify.com',
      socialLinks: {
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com'
      },
      bio: 'Vocalista com uma voz marcante e letras que tocam o coração.',
      whatsapp: '5571987034640'
    }
  ];

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12 glow-text">
          Nossos Artistas
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          className="artist-swiper"
        >
          {artists.map((artist) => (
            <SwiperSlide key={artist.id}>
              <ArtistCard 
                artist={artist} 
                onClick={() => handleArtistClick(artist)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <ArtistModal
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ArtistasTab;
