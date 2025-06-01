import React, { useState } from "react";
import StarField from "@/components/StarField";
import Navigation from "@/components/Navigation";
import HomeTab from "@/components/HomeTab";
import ArtistasTab from "@/components/ArtistasTab";
import ProducoesTab from "@/components/ProducoesTab";
import ContatoTab from "@/components/ContatoTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "artistas":
        return <ArtistasTab />;
      case "producoes":
        return <ProducoesTab />;
      case "contato":
        return <ContatoTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="relative z-50">
      <StarField />
      {/* 🚀 Adicione a barra de navegação com a função para mudar de aba */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;