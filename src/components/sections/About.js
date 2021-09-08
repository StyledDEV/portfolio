import React from 'react';

export default function About({ isAboutPage }) {
  return (
    <section id="about" className="section">
      <article className={isAboutPage && 'section-article'}>
        <h2 className="section-title">Conoceme</h2>
        <p className="section-paragraph">
          Gracias a mi experiencia previa con la informática, me he dado cuenta
          que hay muchas cosas que desconozco, pero a su vez, que me puedo
          adaptar rápido a diferentes tecnologías y entornos.
        </p>
        <p className="section-paragraph">
          Considero que la mejor manera de dominar una herramienta es intentando
          enseñar su funcionamiento a quienes no saben nada de ella, y usarla en
          proyectos que superen mi conocimiento, para de esa manera buscar
          información, aprender y continuar el ciclo. ♻
        </p>
      </article>

      {isAboutPage && (
        <>
          <article className="section-article">
            <h2 className="section-title">Aspiraciones</h2>
            <p className="section-paragraph">
              Busco un crecimiento personal y profesional que me de una buena
              calidad de vida y la oportunidad de cumplir con mis propósitos
              principales; ayudar animales y viajar.
            </p>
          </article>

          <article className="section-article">
            <h2 className="section-title">Mis valores</h2>
            <p className="section-paragraph">
              Respetar y no desprestigiar lo que alguien dice, tener aptitud en
              lo que se hace, ser sincero para ayudar a quienes buscan mejorar.
            </p>
          </article>
        </>
      )}
    </section>
  );
}
