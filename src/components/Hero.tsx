import { Link } from 'react-router-dom';
import heroImage from '/images/hero.webp';

function Hero() {
  return (
    <section className="section">
      <h2 className="section-heading">Espacio en Armonía</h2>
      <div className="items-center justify-center text-center space-y-4 max-w-4xl center mx-auto pb-6">
        <p>Aquí comienza un viaje hacia tu sanación física, mental, emocional y espiritual.<br />Sabemos que dar el primer paso no siempre es fácil, pero es el que transforma todo.</p>
        <p>En este camino vas a redescubrir tu bienestar, mejorar tu calidad de vida y alcanzar esa versión de ti que tanto anhelas.</p>
        <img src={heroImage} alt="Espacio en armonía - energía y bienestar" className="mx-auto rounded-lg shadow-md w-full object-cover my-4 max-w-[600px]" loading="lazy"/>
        <p><span className="italic">"El primer paso no te lleva a donde querés ir, pero te saca de donde estás."</span></p>
        <p>Estamos acá para acompañarte, paso a paso.<br />La decisión es tuya. El camino, lo hacemos juntos.</p>
      </div>
    </section>
  );
}

export default Hero;
