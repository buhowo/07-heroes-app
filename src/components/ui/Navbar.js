import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

  const { user: { name }, dispatch } = useContext(AuthContext);
  const history = useHistory(); 
  
  const handleLogout = () => {
    history.replace('/login');
    
    dispatch({
      type: types.logout,

    });
  }

  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2">

      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 multi-collapse">
        <ul className="navbar-nav w-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </ul>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 multi-collapse">
        <ul className="navbar-nav w-auto">

          <span className='nav-item nav-link text-info'>
            {name}
          </span>
          <button

            onClick={handleLogout}
            className="nav-item nav-link btn"
            to="/login"
          >
            Logout
          </button>
        </ul>
      </div>

    </nav>
  )
}
