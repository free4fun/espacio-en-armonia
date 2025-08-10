import { ExternalLink } from 'lucide-react';

export default function Club() {
  return (
    <section className="section bg-gradient-to-b from-white to-[#f3fdf6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4b4b3e] mb-4">Club de Meditación</h2>
        <p className="text-lg text-[#444] mb-6 leading-relaxed">Un espacio gratuito e íntimo para reconectar con tu interior, junto a otros caminantes del alma.</p>
        <div className="bg-white shadow-lg rounded-3xl p-8 border border-[#cde9d3]">
          <p className="text-md text-[#333] mb-4">Una vez por semana, generalmente los <strong>viernes a las 17:00 hs</strong> nos reunimos durante <strong>50 minutos</strong> para realizar una meditación guiada y actividades de crecimiento personal.</p>
          <p className="text-md text-[#333] mb-4">El grupo es reducido (máximo 4 personas) para preservar la energía, la escucha y la profundidad.</p>
          <p className="text-md text-[#333] mb-6">La participación es <strong>gratuita</strong> y requiere inscripción semanal. Una oportunidad única para el auto conocimiento y explorar herramientas de bienestar.</p>
          <a href="https://docs.google.com/forms/d/..." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#92bfa0] text-white font-medium px-6 py-2 rounded-full shadow hover:bg-[#7fae91] transition">Inscribirme <ExternalLink size={18} /></a>
        </div>
        <h3 className="text-xl font-semibold text-[#4b4b3e] mt-10 mb-4">Próximos encuentros</h3>
        <ul className="text-[#444] text-md space-y-2">
          {[
            'Viernes 9 de agosto, 17:00 hs',
            'Viernes 16 de agosto, 17:00 hs',
            'Viernes 23 de agosto, 17:00 hs',
            'Viernes 30 de agosto, 17:00 hs',
          ].map((fecha, i) => (
            <li key={i} className="bg-[#e7f5ec] rounded-full py-2 px-4 inline-block">{fecha}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-6 italic"> * Se recomienda llegar unos minutos antes, con disposición al silencio y la introspección.</p>
      </div>
    </section>
  );
}
