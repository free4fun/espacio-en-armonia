import React from "react";

function SobreNosotros() {
  return (
    <section className="section">
      <h2 className="section-heading">Acerca De</h2>
      <div className="space-y-4 max-w-4xl center mx-auto pb-6">
        <div className="space-y-4">
          <p className="leading-relaxed">
            Mauricio Sosa Giri (Montevideo, 1985), es escritor, tecnólogo y caminante espiritual.
            Desde muy joven comprendió que el lenguaje es medicina y puente entre mundos. Su vida ha sido una integración constante entre el arte, la tecnología y la espiritualidad, transitando con conciencia y sensibilidad tantos los caminos del pensamiento lógico como los del alma.
          </p>
          <div className="max-w-sm w-full mx-auto">
            <img src="/images/mauricio2.webp" alt="Mauricio Sosa Giri" className="rounded-3xl w-full h-auto" loading="lazy" />
          </div>
          <p className="leading-relaxed">
            Es autor del libro <em>“Espíritu Animal”</em> ISBN: 978-9915-43-062-1, una guía espiritual que invita a caminar junto a los animales como maestros, símbolos y guardianes del alma. En esta obra reúne sabiduría ancestral, introspección y ejercicios prácticos para reconectar con los sagrado que habita en la naturaleza.
            Ha profundizado en prácticas como el chamanismo, la gemoterapia, el tarot, el sahumado, el uso de plantas medicinales, la atención plena y la sanación energética. También ha explorado el funcionamiento de la mente subconciente y el poder de la intención como herramientas de transformación interior.
          </p>
          <p className="leading-relaxed">
            Su preparación se respalda en un recorrido tanto autodidacta como guiado por mentores y docentes de gran trayectoría. Cuenta con los siguientes certificados:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600">
            <li>Maestría Interior en Reiki Niveles 1, 2 y 3 </li>
            <li>Curso de Plantas Medicinales con Marión Aguilera (muy reconocida en el ámbito)</li>
            <li>Certificado en Plantas Medicinales por Edutin Academy</li>
            <li>Curso de Programación Neurolingüística y Radiestesia con Patricia de Ávila</li>
            <li>Workshop intensivo de Mindfulness (3 días)</li>
            <li>Certificación en Primeros Auxilios por Edutin Academy</li>
          </ul>
          <div className="max-w-sm w-full mx-auto">
            <img src="/images/mauricio.webp" alt="Mauricio Sosa Giri" className="rounded-3xl w-full h-auto" loading="lazy" />
          </div>
          <p className="leading-relaxed">
            Su práctica se manifiesta como una síntesis viva entre sabiduría ancestral, herramientas modernas y una escucha profunda de la intuición. Cada acompañamiento que realiza está guiado por una visión integradora del bienestar, donde el cuerpo, la mente, el espíritu y la naturaleza dialogan en armonía.
          </p>
        </div>
        <div className="items-center justify-center text-center space-y-4 max-w-4xl center mx-auto">
        <h2 className="text-2xl font-semibold text-leaf center">Misión</h2>
        <p className="text-base mt-2">
          Guiar procesos de sanación integral a través de técnicas holísticas, saberes ancestrales y herramientas modernas, creando un espacio seguro y transformador para cada persona.
        </p>
        <h2 className="text-2xl font-semibold text-leaf">Visión</h2>
        <p className="text-base mt-2">
          Ser un espacio de referencia en bienestar holístico, donde el cuerpo, la mente, el espíritu y la naturaleza se integren en armonía.
        </p>
        <h2 className="text-2xl font-semibold text-leaf">Frase</h2>
        <p className="text-base italic mt-2 ">“Sanar es recordar quién eres.”</p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
