import React from 'react'
import { useEffect, useState } from 'react';

function ScrollHooks() {

    
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      console.log('fase de montaje')

    const detectarScroll = () =>  setScrollY(Window.pageYOffset);
    

    window.addEventListener('scroll', detectarScroll);

    return () => {
        window.removeEventListener('scroll',detectarScroll)
    };
}, [scrollY]);
    
   useEffect(() =>{
    console.log('Fase de Montaje')
   },[] )

   useEffect(() =>{
    return () => {
        console.log('Fase de Desmontaje')  
    }
   } )


  return (
    <>
        <h1>Hooks UseEffect y el ciclo de vida</h1>

        <p>Scroll y del Navegador {scrollY}px</p>
    

    </>
  )
}

export default ScrollHooks