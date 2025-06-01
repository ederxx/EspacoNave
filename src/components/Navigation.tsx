import React from "react";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "artistas", label: "Artistas" },
    { id: "producoes", label: "Produções" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav className="relative z-40 w-full py-4">
<div className="bg-white/10 backdrop-blur-sg rounded-full px-6 py-3 border border-white/20 shadow-2xl flex justify-center items-center space-x-4 w-fit mx-auto scale-55">
       <div className="flex justify space-s-6 items-center">
          <Rocket className="text-blue-400 animate-pulse" size={20} />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)} // 🚀 Agora a aba muda corretamente
              className={cn(
                "px-6 py-2 rounded-full text-white font-medium transition-all duration-300 relative",
                activeTab === tab.id
                  ? "bg-white/20 shadow-lg glow-effect"
                  : "hover:bg-white/10 hover:scale-105"
              )}
            >
              {tab.label}
            </button>
          ))}
          <Rocket className="text-purple-400 animate-bounce" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;