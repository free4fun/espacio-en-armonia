import { useEffect } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:scale-110 transition-transform"
        aria-label="Cerrar"
      >
        &times;
      </button>

      {/* Botón anterior */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl hover:scale-125 transition-transform"
        aria-label="Anterior"
      >
        &#8249;
      </button>

      {/* Imagen principal */}
      <img
        src={images[currentIndex]}
        alt={`Vista ${currentIndex + 1}`}
        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl transition duration-300"
      />

      {/* Botón siguiente */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-4xl hover:scale-125 transition-transform"
        aria-label="Siguiente"
      >
        &#8250;
      </button>
    </div>
  );
}
