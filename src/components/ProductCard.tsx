import { Product } from '../types/ProductType';

function ProductCard({ name, image, originalPrice, discountedPrice }: Product) {
  const discountPercent = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  return (
    <div className="relative bg-white shadow-md rounded-xl overflow-hidden flex flex-col w-52 md:w-60 shrink-0">
      <img src={image} alt={name} className="w-full h-40 object-cover" loading="lazy" />
      
      {/* Badge de descuento */}
      {discountPercent > 0 && (
        <span className="absolute top-2 left-2 bg-[#f87171] text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          -{discountPercent}%
        </span>
      )}

      <div className="p-4 flex flex-col flex-grow justify-between">
        <h3 className="text-md font-semibold text-[#4b4b3e]">{name}</h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500 line-through">USD {originalPrice}</p>
          <p className="text-lg font-bold text-[#92bfa0]">USD {discountedPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;