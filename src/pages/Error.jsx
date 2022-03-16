import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
    </div>
  );
};

export default Error;