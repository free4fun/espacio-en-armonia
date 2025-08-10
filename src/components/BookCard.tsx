function BookCard() {
  return (
    <div className="bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden">
  <img src="/images/libro.webp" alt="Espíritu Animal" className="w-full md:w-1/3 object-cover h-64 md:h-auto" />
  <div className="p-6 flex flex-col justify-between">
    <h3 className="text-2xl font-bold text-[#4b4b3e]">Espíritu Animal</h3>
    <p className="text-[#555] mt-2">Una guía espiritual para caminar junto a los animales como símbolos y guardianes del alma.</p>
    <div className="mt-4">
      <p className="line-through text-sm text-gray-500">USD 22</p>
      <p className="text-lg font-bold text-[#92bfa0]">USD 18</p>
    </div>
  </div>
</div>

  );
}
export default BookCard;