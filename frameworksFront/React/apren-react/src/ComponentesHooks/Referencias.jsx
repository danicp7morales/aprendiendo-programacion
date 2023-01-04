import React,{ useRef} from 'react'

function Referencias() {

 // let refMenu = createRef(),
  let refMenu = useRef(),
  refMenuBtn = useRef();

  

  const handleToggleMenu = (e) => {
   /* const $menu = document.getElementById('menu');


    if(e.target.textContent === 'menu'){
      e.target.textContent = 'Cerrar'
      $menu.style.display= 'block'
    }else{
      e.target.textContent = 'menu'
      $menu.style.display= 'none'
    }*/
    if(refMenuBtn.current.textContent === 'menu'){
      refMenuBtn.current.textContent = 'Cerrar'
      refMenu.current.style.display= 'block'
    }else{
      refMenuBtn.current.textContent = 'menu'
      refMenu.current.style.display= 'none'
    }

  }



  return (
    <div>
        <h1>Referencias</h1>

        <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>menu</button>

        <nav id='menu' ref={refMenu} style={{display:'none'}}>
    
          <a href='#'>seccion 1</a>
          <br />
          <a href="#">seccion 2</a>
          <br />
          <a href="#">seccion 3</a>
          <br />
          <a href="#">seccion 4</a>
          <br />
          <a href="#">seccion 5</a>
          <br />
        </nav>
    </div>
  )
}

export default Referencias  