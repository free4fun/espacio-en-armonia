import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tecnicas from "./components/Tecnicas";
import SobreNosotros from "./components/AcercaDe";
import Blog from "./components/Blog";
import Club from "./components/Club";
import Shop from "./components/Shop";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import TecnicaDetalle from "./components/TecnicaDetalle";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import  Post  from "./components/Post";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" replace />} />
            <Route path="/inicio" element={<Hero />} />
            <Route path="/tecnicas" element={<Tecnicas />} />
            <Route path="/acerca-de" element={<SobreNosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/club" element={<Club />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/tecnicas/:url" element={<TecnicaDetalle />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}

export default App;