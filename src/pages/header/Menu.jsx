import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import 'assets/css/menu/Menu.css';

// Components
import Search from 'components/search/Search';
import Cart from 'components/cart/Cart';
import LogoIcon from 'components/logo/LogoIcon';

function Menu() {
  return (
    <nav className="menu__wrapper">
      <div className="col-12 menu__row">
        <div className="col-2 col-xs-2 col-sm-4 col-md-4 menu__col__login">
          <div className="menu__col__menu__responsive__icon">
            <label htmlFor="check" className="checkbtn">
              <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill="#686868" fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </label>
          </div>
          <div className="menu__col__sign__links">
            <Link to="/">Entrar</Link>
            <span> | </span>
            <Link to="/">Cadastre-se</Link>
          </div>
        </div>
        <div className="col-5 col-xs-5 col-sm-4 col-md-4">
          <div className="menu__logo__middle">
            <LogoIcon color="#DE8F75" />
          </div>

          <div className="menu__col__links">
            <input type="checkbox" id="check" />
            <ul>
              <li><Link to="/">SAPATOS</Link></li>
              <li><Link to="/">BOLSAS</Link></li>
              <li><Link to="/">ACESSÓRIOS</Link></li>
              <li><Link to="/">OFF</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-5 col-xs-5 col-sm-4 col-md-4">
          <div className="menu__col__search__basket">
            <Search />
            <Cart />
          </div>
        </div>
      </div>
    </nav>


  )
}

export default Menu
