import { useState } from 'react';
import { BolsaMedicinal } from '../types/BolsaMedicinalType';
import Lightbox from './Lightbox';

function BolsaCard({ bolsa }: { bolsa: BolsaMedicinal }) {
  const [selectedImage, setSelectedImage] = useState(bolsa.images[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % bolsa.images.length : null));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + bolsa.images.length) % bolsa.images.length : null));

  const discountPercent = Math.round(100 - (bolsa.discountedPrice / bolsa.originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#a8e06e22] flex flex-col justify-between h-full min-w-[275px] max-w-[300px] mx-auto">
      <div className="relative">
        <img
          src={selectedImage}
          alt={bolsa.name}
          className="rounded-xl mb-4 h-48 w-full object-cover transition-opacity duration-300 cursor-zoom-in"
          onClick={() => openLightbox(bolsa.images.indexOf(selectedImage))}
        />
      </div>

      <div className="flex gap-2 mb-4 justify-center">
        {bolsa.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Vista ${idx + 1}`}
            className={`h-12 w-12 rounded-md object-cover cursor-pointer border ${selectedImage === img ? 'border-[#92bfa0]' : 'border-transparent'}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold text-[#4b4b3e] mb-2 text-center">{bolsa.name}</h3>
      <p className="text-sm text-[#333] mb-4 text-center">{bolsa.description}</p>
      <ul className="text-xs text-gray-600 italic mb-4 list-disc list-inside">
        {bolsa.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <div className="text-center mb-4">
        <span className="text-sm text-gray-500 line-through mr-2">${bolsa.originalPrice}</span>
        <span className="text-lg font-bold text-green-700">${bolsa.discountedPrice}</span>
        <span className="ml-2 text-sm text-green-600 font-medium">-{discountPercent}%</span>
      </div>

      <a
        href={`https://wa.me/59812345678?text=Hola! Estoy interesad@ en una bolsa de poder: ${bolsa.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-center w-full"
      >
        Comprar por WhatsApp
      </a>

      {lightboxIndex !== null && (
        <Lightbox
          images={bolsa.images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

export default BolsaCard;
