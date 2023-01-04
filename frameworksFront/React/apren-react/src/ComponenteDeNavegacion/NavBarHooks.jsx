import React from 'react';
import {Link} from 'react-router-dom'

function NavBarHooks() {
  return (
    <div>
        
      <ul>
        
        <li>
          <Link to='/contadorHooks'>CONTADORHOOKS</Link>
        </li>
        <li>
          <Link to='/scrollHooks'>SCROLLHOOKS</Link>
        </li>
        <li>
          <Link to='/relojConHooks'>RELOJCONHOOKS</Link>
        </li>
        <li>
          <Link to='/ajaxHooks'>AJAXHOOKS</Link>
        </li>
        <li>
          <Link to='/hookPersonalizados'>HOOK PERSONALIZADO</Link>
        </li>
        <li>
          <Link to='/referencias'>REFERENCIAS</Link>
        </li>
        
        





      </ul>

    </div>
  )
}

export default NavBarHooks