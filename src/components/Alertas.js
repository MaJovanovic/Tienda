import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';
  function Alertas(){
    const notify = () => toast("Bienvenido !");
    return (
      <div>  
        <button onClick={notify}>Bienvenido !</button>     
        <ToastContainer />
      </div>
    );
  }

  export default Alertas;