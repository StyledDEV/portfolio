import React from 'react';
import { emailList } from '../../data';

export default function ListItem({ name, value, isEmail }) {
  const parentClass = 'section-contact-list-item';
  const classes = {
    item: parentClass,
    name: `${parentClass}-name`,
    value: `${parentClass}-value`,
  };

  return (
    <li className={classes.item}>
      <span className={classes.name}>{name}</span>
      {isEmail ? (
        <>
          {emailList.map((email, index) => (
            <a
              key={index}
              className={classes.value}
              href={`mailto:${email}`}
              title={`Enviar correo a ${email}`}
            >
              {email}
            </a>
          ))}
        </>
      ) : (
        <span className={classes.value}>{value}</span>
      )}
    </li>
  );
}
