import React from 'react';
import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget';


function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TIENDA MERY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ItemListContainer />
            </li>
          </ul>
        </div>
        <div className= "align-item-center">
          <img src= "carrito.png" alt="Carro" width="50" height="30" />
          <CartWidget cantidad={1} />
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
