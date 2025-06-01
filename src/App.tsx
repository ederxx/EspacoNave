import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./components/NavigationContext"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArtistasTab from "./components/ArtistasTab";
import ProducoesTab from "./components/ProducoesTab";
import ContatoTab from "./components/ContatoTab";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NavigationProvider> {/* ✅ Agora envolve toda a estrutura de roteamento */}  
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
        <Route path="/artistas" element={<ArtistasTab />} />
        <Route path="/producoes" element={<ProducoesTab />} />
        <Route path="/contato" element={<ContatoTab />} />
        <Route path="*" element={<NotFound />} />

          </Routes>
        </BrowserRouter>
      </NavigationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
