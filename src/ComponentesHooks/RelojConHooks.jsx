import {useState, useEffect} from 'react';

function Reloj ({hora}){
  return <h3>{hora}</h3>;
}

function RelojConHooks() {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  const tictac = (valor) => setVisible(valor);

  //ESTO SE EJECUTA DESPUES DEL RENDERIZADO
  useEffect(() => {//USEEFFECT NO TIENE SENTIDO SI NO HAY VARIABLES QUE CONTROLLAR
    let temporizador;

    if(visible){//SI EL ESTADO ESTA EN TRUE
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString())
      },1000)
    }else{
      clearInterval(temporizador);
    }
      return () => {
        console.log('fase de desmontaje');
        clearInterval(temporizador)
      };

  },[visible] )//ESTE USSEFFECT SE EJECUTA CUANDO HAY UN CAMBIO EN ESTA VARIABLE VISIBLE




  return (
    <div>
        <h1>
          Reloj con Hooks...
          {visible && <Reloj hora={hora}/>}
          <hr />
          <button onClick={() => tictac(true)}>verHora</button>
          <button onClick={() => tictac(false)}>noVerHora</button>
        </h1>

    </div>
  )
}

export default RelojConHooks