import React from 'react'

export default function About({ isAboutPage }) {
  return (
    <section id="about" className="section">
      <article className={isAboutPage && 'section-article'}>
        <h2 className="section-title">Conoceme</h2>
        <p className="section-paragraph">
          Soy un chico de Buenos Aires, Argentina, que siempre intenta aprender
          cuanto más y mejor pueda de diferentes cosas, incluyendo informática,
          cocina, comportamiento animal y/o humano, etc.
        </p>
        <p className="section-paragraph">
          En el ámbito del desarrollo, sobretodo en un proyecto, intento ver las
          cosas como un usuario que no es desarrollador o diseñador, para saber
          qué se puede mejorar para los usuarios que utilicen el software sin
          agregar complicación extra.
        </p>
      </article>

      {isAboutPage && (
        <>
          <article className="section-article">
            <h2 className="section-title">Aspiraciones</h2>
            <p className="section-paragraph">
              Busco un crecimiento personal y profesional que me de una buena
              calidad de vida y me ayude a aportar lo que pueda a otros.
            </p>
          </article>

          <article className="section-article">
            <h2 className="section-title">Mis valores</h2>
            <p className="section-paragraph">
              Siempre intento respetar a todos por igual, sin desprestigiar lo
              que puedan pensar o decir, e intento mejorar como más pueda en lo
              que hago. También soy sincero, porque me parece que es algo que
              puede ayudarnos a mejorar en todos los aspectos.
            </p>
          </article>
        </>
      )}
    </section>
  )
}
