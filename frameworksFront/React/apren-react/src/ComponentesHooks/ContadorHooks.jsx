import { useState } from "react"

function ContadorHooks(props) {

  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador +1)
  const restar = () => setContador(contador -1)
  //const resetear = () => setContador(contador 0)



  return (
    <div>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>suma +</button>
            <button onClick={restar}>resta -</button>
        


        </nav>
        <p>Contador de {props.titulo}</p>
        <h3>{contador}</h3>



    </div>
  )
}


//ACA PODEMOS PASARLE PROPIEDADES POR PROPS, DESDE LA APP LA PROPIEDAD PISA A ESTA 
ContadorHooks.defaultProps = {
    titulo:'Clicks de Dany'
}

export default ContadorHooks