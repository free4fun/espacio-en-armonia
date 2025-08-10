import { useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InfiniteCarouselProps {
  children: React.ReactNode[];
}

export default function InfiniteCarousel({ children }: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemCount = children.length;
  const totalItems = itemCount * 2; // original + clone
  const itemWidthRef = useRef(0);

  // ⚙️ Scroll por flechas
  const scrollByOne = (dir: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container || !itemWidthRef.current) return;

    const offset = dir === 'right' ? itemWidthRef.current : -itemWidthRef.current;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // 🔁 Autoajuste al hacer scroll manual
  const onScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || !itemWidthRef.current) return;

    const scrollLeft = container.scrollLeft;
    const totalWidth = itemCount * itemWidthRef.current;

    // Si pasa del final del primer set (al inicio del duplicado)
    if (scrollLeft >= totalWidth) {
      container.scrollLeft = scrollLeft - totalWidth;
    }

    // Si va antes del inicio
    if (scrollLeft < 0) {
      container.scrollLeft = scrollLeft + totalWidth;
    }
  }, [itemCount]);

  // 🧩 Medir ancho real al montar
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstItem = container.querySelector('div');
    if (firstItem instanceof HTMLElement) {
      itemWidthRef.current = firstItem.offsetWidth + 16; // 16px = gap-4
    }
  }, []);

  // 🟢 Mostrar directamente primer set (sin scroll inicial ni centrado)
  useEffect(() => {
    const container = containerRef.current;
    if (container) container.scrollLeft = 0;
  }, []);

  return (
    <div className="relative w-full">
      {/* Flechas */}
      <button
        onClick={() => scrollByOne('left')}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scrollByOne('right')}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Contenedor scrollable */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex overflow-x-auto gap-4 pb-2 snap-x scroll-smooth scrollbar-hide touch-pan-x"
      >
        {[...children, ...children].map((child, i) => (
          <div
            key={i}
            className="snap-center w-[75%] sm:w-[45%] md:w-[22%] flex-shrink-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
