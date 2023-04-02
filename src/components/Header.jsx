import React from 'react';
import logoHeader from '../images/logo-Vector.svg'

function Header() {
  return (
    <>
        <header className="header">
            <img className="header__logo" src={logoHeader} alt="Логотип Место"/>
        </header>
    </>
  );
}

export default Header