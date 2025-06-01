
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Youtube } from 'lucide-react';

const VideoSection: React.FC = () => {
  // Vídeos mockados - você pode substituir depois
  const videos = [
    {
      id: '1',
      title: 'Beat Trap Heavy - Espaço Nave',
      videoId: 'AmDt4O-7RO8'
    },
    {
      id: '2', 
      title: 'Melodic Rap Beat - Space Vibes',
      videoId: 'AmDt4O-7RO8'
    },
    {
      id: '3',
      title: 'Hard Drill Beat - Galaxy Sound',
      videoId: 'AmDt4O-7RO8'
    },
    {
      id: '4',
      title: 'Chill Lo-Fi Beat - Cosmic Waves',
      videoId: 'AmDt4O-7RO8'
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-2xl flex items-center gap-2">
          <Youtube className="text-red-500" />
          Vídeos no YouTube
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold text-sm">{video.title}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
          <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default VideoSection;
