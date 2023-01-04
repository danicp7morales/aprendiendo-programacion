/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//COMPONENTE PRESENTACIONAL EN EL ABOUT SIEMPRE HABLAMOS DE QUE SE TRATA NUESTRA APLICACION
//ESTE COMPONENTE SE SUELE MOSTRAR SIEMPRE, SOBRE QUE SE TRATA TODA MI APLICACION


function NavBar7(){
  return(
    <nav className ="navbar bg-dark">
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscador..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Buscador</button>
        <button className="btn btn-outline-info" type="submit">Imfo</button>
        <button className="btn btn-outline-primary" type="submit">Lunes</button>
        <button className="btn btn-outline-primary" type="submit">Martes</button>
        <button className="btn btn-outline-primary" type="submit">Miercoles</button>
        <button className="btn btn-outline-primary" type="submit">Jueves</button>
        <button className="btn btn-outline-primary" type="submit">Viernes</button>
      </form>
    </div>
    </nav>
);
  }
  

    
 function Pagination() {
  return(
    
    <nav aria-label="...">
  <ul className="pagination pagination-lg">
    <li className="page-item active" aria-current="page">
      <span className="page-link">1</span>
    </li>
    <li class="page-item"><a className="page-link" href="#">dany</a></li>
    <li class="page-item"><a className="page-link" href="#">3</a></li>
    <li class="page-item"><a className="page-link" href="#">4</a></li>
    <li class="page-item"><a className="page-link" href="#">5</a></li>
    <li class="page-item"><a className="page-link" href="#">6</a></li>
    <li class="page-item"><a className="page-link" href="#">7</a></li>
  </ul>
</nav>
  )
 } 
    


function Bootstrap() {
  return (
    <div>
<h2>Bootstrap</h2>
<NavBar7/>
<Pagination/>
    </div>
  )
}

export default Bootstrap;