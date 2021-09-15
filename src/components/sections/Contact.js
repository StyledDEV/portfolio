import React from 'react';
import ListItem from '../Contact/ListItem';

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <h2 className="section-title section-contact-title">Contacto</h2>
      <ul className="section-contact-list">
        <ListItem name="Correo" isEmail={true} />
        <ListItem name="Teléfono" value="+54 11-3047-1566" />
        <ListItem name="Ubicación" value="Buenos Aires, Argentina" />
      </ul>
    </section>
  );
}
