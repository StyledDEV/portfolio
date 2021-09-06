import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <h2 className="section-title section-contact-title">Contacto</h2>
      <ul className="section-contact-list">
        <li className="section-contact-list-item">
          <span className="section-contact-list-item-name">Correo</span>
          <a
            className="section-contact-list-item-value"
            href="mailto:apbdev.contact@gmail.com"
            title="Enviar correo a apbdev.contact@gmail.com"
          >
            apbdev.contact@gmail.com
          </a>
        </li>
        <li className="section-contact-list-item">
          <span className="section-contact-list-item-name">
            WhatsApp (sólo mensaje)
          </span>
          <span className="section-contact-list-item-value">
            +54 11-3047-1566
          </span>
        </li>
        <li className="section-contact-list-item">
          <span className="section-contact-list-item-name">Ubicación</span>
          <span className="section-contact-list-item-value">
            Buenos Aires, Argentina
          </span>
        </li>
      </ul>
    </section>
  );
}
