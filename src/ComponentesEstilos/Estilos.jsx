import React from 'react'
import './Estilos.css'
import moduleStyle from './Estilos.module.css'
import './Estilos.scss'

function Estilos() {
    let myStyle = {
        borderRadius:'5rem',
        margin:'2rem auto',
        maxWidth:'30%'
    }
  return (
    <div>
        <section className='estilos'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Extilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:'2.5rem', margin:'1rem'}}>
                Extilos en hoja (atributo style)</h3>
            <h3 className='bg-react' style={myStyle}>Extilos en linea</h3>
            <h3 className='bg-react'>Agregando-normalize <br />
            <code>@import-normalize</code></h3>
            <h3 className={moduleStyle.success}>Extilos modularizando</h3>
            <h3 className={moduleStyle.amarillo}>Extilos modulos semaforo je...</h3>
            <h3 className={moduleStyle.error}>Extilos modulos</h3>

            <h3 className='bg-sass'>Extilos con SASS</h3>
            <h3 className='bg-sass'>Extilos con SASS</h3>
            <h3 className='bg-sass'>Extilos con SASS</h3>
            
           
        </section>
    </div>
  )
}

export default Estilos;