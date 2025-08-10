import { useEffect, useRef, useState } from 'react';
import bolsasRaw from '../data/bolsas.json';
import productos from '../data/productos.json';
import BolsaCard from './BolsaCard';
import ProductCard from './ProductCard';
import BookCard from './BookCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BolsaMedicinal } from '../types/BolsaMedicinalType';

const bolsas: BolsaMedicinal[] = bolsasRaw;

export default function Shop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    const totalItems = bolsas.length;
    const itemWidth = scrollRef.current?.firstChild instanceof HTMLElement ? scrollRef.current.firstChild.offsetWidth + 66 : 600;
    const container = scrollRef.current;

    if (container) {
      const newIndex = direction === 'right' ? scrollIndex + 1 : scrollIndex - 1;
      const wrappedIndex = ((newIndex % totalItems) + totalItems) % totalItems;
      setScrollIndex(wrappedIndex);
      container.scrollTo({
        left: container.scrollLeft + (direction === 'right' ? itemWidth : -itemWidth),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section bg-[#f4f5ef]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4b4b3e]">Tienda Sagrada</h2>

        {/* Bolsas de Poder */}
        <div className="relative w-full">
          <button onClick={() => handleScroll('left')} className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition" aria-label="Anterior"><ChevronLeft size={24} /></button>
          <button onClick={() => handleScroll('right')} className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition" aria-label="Siguiente"><ChevronRight size={24} /></button>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-[#4b4b3e]">Bolsas de Poder</h3>
            <p className="text-[#555] mb-4">Pequeños altares portátiles creados con intención, hierbas, cristales y energía ritual.</p>
            <div ref={scrollRef} className="flex overflow-x-auto gap-4 pb-2 snap-x scroll-smooth scrollbar-hide touch-pan-x">
              {bolsas.map((bolsa, i) => (
                <div key={i + '-' + bolsa.name} className="snap-center w-[75%] sm:w-[45%] md:w-[20%] flex-shrink-0">
                  <BolsaCard bolsa={bolsa} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Velas artesanales */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#4b4b3e]">Velas de Miel Artesanales</h3>
          <div className="flex overflow-x-auto gap-4 pb-2 snap-x scroll-smooth">
            {productos.filter(item => item.category === "velas").map((vela, i) => (
              <div key={i} className="snap-center min-w-[75%] sm:min-w-[45%] md:min-w-[22%]">
                <ProductCard {...vela} />
              </div>
            ))}
          </div>
        </div>

        {/* Flautas nativas */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#4b4b3e]">Flautas Nativas Artesanales</h3>
          <div className="flex overflow-x-auto gap-4 pb-2 snap-x scroll-smooth">
            {productos.filter(item => item.category === "flautas").map((flauta, i) => (
              <div key={i} className="snap-center min-w-[75%] sm:min-w-[45%] md:min-w-[22%]">
                <ProductCard {...flauta} />
              </div>
            ))}
          </div>
        </div>

        {/* Gemas y Cristales */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#4b4b3e]">Gemas y Cristales</h3>
          <div className="flex overflow-x-auto gap-4 pb-2 snap-x scroll-smooth">
            {productos.filter(item => item.category === "gemas").map((gema, i) => (
              <div key={i} className="snap-center min-w-[75%] sm:min-w-[45%] md:min-w-[22%]">
                <ProductCard {...gema} />
              </div>
            ))}
          </div>
        </div>

        {/* Libro destacado */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#4b4b3e]">Libro Espíritu Animal</h3>
          <BookCard />
        </div>
      </div>
    </section>
  );
}