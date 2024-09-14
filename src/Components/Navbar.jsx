import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const themes = {
  light: 'dark',
  dark: 'light',
};

const iconos = {
  light: '🌙',
  dark: '☀️',
}

const Navbar = () => {
  const [{ theme }, dispatch] = useContextGlobal();
  const cambiarTheme = () => dispatch({ type: 'theme', theme: themes[theme] });

  return (
    <nav className={theme}>
      <div>
        <h1>DH Odonto</h1>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/contacto">Contanct</Link>
          <Link to="/favs">Favs</Link>
          <button className={themes[theme]} onClick={cambiarTheme}>{iconos[theme]}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar