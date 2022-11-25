import React from 'react';
import Item from './Item';
import Alertas from './Alertas';


function ItemListContainer() {
  return (
    
    <ul className="dropdown-menu">
      <Item nombre="Alimento para gatos"/>
      <Item nombre="Accesorios" />
      <Item nombre="Juguetes para gatos" />
      <Alertas />
      
    
    </ul>

    

    

  );
}



export default ItemListContainer;