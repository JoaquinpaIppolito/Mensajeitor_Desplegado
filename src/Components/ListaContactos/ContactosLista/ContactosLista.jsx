import React from 'react'
import { Contactos } from '..'

/* Hace el mapeo, es la lista de contactos */
export const ContactosLista = ({ lista_contactos }) => {
  return (
    <>
      {lista_contactos.map((item_contacto) => (
        <Contactos key={item_contacto.id} cttos={item_contacto} />
      ))}
    </>
  );
};

