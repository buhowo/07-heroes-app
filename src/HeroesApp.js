import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRuter } from './routers/AppRuter'

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };


export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRuter />
    </AuthContext.Provider>
  );
}
