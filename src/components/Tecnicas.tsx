import { Link } from 'react-router-dom';
import tecnicas from '../data/tecnicas.json';
import * as Icons from 'lucide-react';

function Tecnicas() {

return (
    <section className="section">
      <h2 className="section-heading">Técnicas Holísticas</h2>
      <div className="items-center justify-center text-center space-y-4 max-w-4xl center mx-auto pb-6">
        <p>Te ofrecemos una variedad de técnicas holísticas pensadas para acompañarte en tu camino de bienestar integral.</p>
        <p>Cada una de ellas trabaja distintos aspectos de tu ser —físico, mental, emocional y espiritual— brindándote herramientas para sanar, equilibrarte y reconectar con tu esencia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tecnicas.map((s, i) => {
    const Icon = (Icons[s.icon as keyof typeof Icons] || Icons.Circle) as React.ElementType;

          console.log("Rendering icon:", s.icon, Icon); // ← agrega esto

          return (
            <Link key={i} to={`/tecnicas/${s.url}`} className="h-full group">
              <div className="card h-full flex flex-col justify-between rounded-lg shadow-lg p-6 bg-white hover:bg-[#92bfa033] hover:shadow-xl transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-8 h-8 text-[#a8e06e] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="card-title text-xl font-semibold text-gray-800 group-hover:text-[#a8e06e] transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <p className="card-text text-gray-600">{s.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Tecnicas;