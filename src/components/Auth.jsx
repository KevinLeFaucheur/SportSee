import React from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom';

const users = [
  { id: '12' },
  { id: '18' },
];

/** Checks if requested user id exists */
const useAuth = () => {
  const user = { loggedIn: false };
  const { id } = useParams();

  if(users.find(user => user.id === id)) {
    user.loggedIn = true;
  }

  return user && user.loggedIn;
}

export const Auth = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to='../404' state={{ error : 'Utilisateur non trouvé' }} />
};
