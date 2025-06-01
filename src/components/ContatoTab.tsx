
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Twitter, Music, MessageCircle, Mail, Phone } from 'lucide-react';

const ContatoTab: React.FC = () => {
  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de entrar em contato com a Espaço Nave.';
    const whatsappUrl = `https://wa.me/5571987034640?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/eder_x',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Spotify',
      icon: Music,
      url: 'https://open.spotify.com/intl-pt/artist/26bQwhpZ9s1feRnvyLLV1D?si=IfjO0fMaSPWkEmlGK6XYrg',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 glow-text">
            Entre em Contato
          </h2>
          <p className="text-xl text-white/80">
            Vamos criar algo incrível juntos!
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">
              Nossas Redes Sociais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  onClick={() => window.open(social.url, '_blank')}
                  className={`h-20 bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-2`}
                >
                  <social.icon size={24} />
                  <span className="font-semibold">{social.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full glow-effect flex items-center gap-3 mx-auto"
                size="lg"
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">
              Informações de Contato
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <Phone className="text-white/70" size={32} />
                <div>
                  <h3 className="text-white font-semibold text-lg">Telefone</h3>
                  <p className="text-white/80">+55 71 98703-4640</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3">
                <Mail className="text-white/70" size={32} />
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-white/80">naveespaco@gmail.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-white/60">
            © 2024 Espaço Nave - Produtora Musical. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContatoTab;
