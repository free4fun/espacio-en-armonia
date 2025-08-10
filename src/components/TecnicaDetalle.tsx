import React from "react";
import { useParams, Link } from 'react-router-dom';
import tecnicas from '../data/tecnicas.json';

function TecnicaDetalle() {
  const { url } = useParams();
  const tecnica = tecnicas.find((t) => t.url === url);

  if (!tecnica) {
    return (
      <section className="section max-container text-center">
        <h2 className="section-heading">Técnica no encontrada</h2>
        <Link to="/tecnicas" className="btn-primary">Volver a Técnicas</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-heading">{tecnica.title}</h2>
      <Link to="/tecnicas" className="text-sm text-primary hover:text-lime-500 mb-4 inline-block">← Volver a Técnicas</Link>
      <div className="items-center justify-center space-y-4 max-w-4xl center mx-auto pb-6">
        {tecnica.content.split(".").map((fragment, i, arr) => (
          <React.Fragment key={i}>
            {i < arr.length - 1 && <p>{fragment.trim()}.</p>}
            {i === 2 && (
              <div>
                <img src={`/images/tecnicas/${tecnica.url}.webp`} alt={tecnica.title} className="w-full max-w-md mx-auto rounded-lg shadow-md" loading="lazy"/>
                <p className="text-center text-gray-500 mb-6">{tecnica.description}</p>
              </div>
            )}
          </React.Fragment>
  ))}
</div>
    </section>
  );
}

export default TecnicaDetalle;
