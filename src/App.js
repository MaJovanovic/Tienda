import logo from './logo.svg';
import React from 'react';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Alertas from './components/Alertas';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>


      <div>
        <ItemListContainer />
      </div>      
    </div>
  );
}

export default App;
