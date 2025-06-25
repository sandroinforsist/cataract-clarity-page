
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CataractPage from "./pages/CataractPage";
import LinksPage from "./pages/LinksPage";
import NotFound from "./pages/NotFound";
import BookingModal from "./components/BookingModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catarata" element={<CataractPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BookingModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
