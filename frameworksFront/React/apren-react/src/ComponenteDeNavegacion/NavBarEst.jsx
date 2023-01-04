import React from 'react';
import {Link} from 'react-router-dom'

function NavBarEst() {
  return (
    <div>
        
      <ul>
        
      <li>
          <Link to='/estilos'>ESTILOS CSS</Link>
        </li>
        <li>
          <Link to='/componentesEstelizados'>COMPONENTES ESTILIZADOS</Link>
        </li>
        
   
      </ul>

    </div>
  )
}

export default NavBarEst