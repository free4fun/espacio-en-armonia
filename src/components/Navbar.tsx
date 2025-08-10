import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-[#eee8df] shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2">
        <Link to="/inicio" className="text-xl font-bold text-leaf"><img src="/images/horizontal.svg" alt="Espacio en Armonía" className="h-14" /></Link>
        <div className="space-x-4 text-sm font-semibold">
          <Link to="/inicio" className="hover:text-[#e6be42] transition">Inicio</Link>
          <Link to="/tecnicas" className="hover:text-[#e6be42] transition">Técnicas</Link>
          <Link to="/acerca-de" className="hover:text-[#e6be42] transition">Acerca De</Link>
          <Link to="/blog" className="hover:text-[#e6be42] transition">Blog</Link>
          <Link to="/club" className="hover:text-[#e6be42] transition">Club</Link>
          <Link to="/shop" className="hover:text-[#e6be42] transition">Tienda</Link>
          <Link to="/contacto" className="hover:text-[#e6be42] transition">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;