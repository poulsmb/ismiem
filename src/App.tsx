import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Mission from "@/pages/Mission";
import Committees from "@/pages/Committees";
import Archive from "@/pages/Archive";
import Announcements from "@/pages/Announcements";
import Contact from "@/pages/Contact";

import LeaderMordkovich from "@/pages/leaders/Mordkovich";
import LeaderYastrebov from "@/pages/leaders/Yastrebov";
import LeaderMalova from "@/pages/leaders/Malova";
import LeaderDrobyshev from "@/pages/leaders/Drobyshev";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/leaders/mordkovich" element={<LeaderMordkovich />} />
              <Route path="/leaders/yastrebov" element={<LeaderYastrebov />} />
              <Route path="/leaders/malova" element={<LeaderMalova />} />
              <Route path="/leaders/drobyshev" element={<LeaderDrobyshev />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;