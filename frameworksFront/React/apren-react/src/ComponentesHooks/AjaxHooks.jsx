import {useEffect, useState} from 'react';
//
//EL COMPONENTE HIJO , por destructuracion le puedo pasar todo lo que quiera que me mande 
//la info de mi api
function PokemonHijoUno(props) {//ESTE ES MI COMPONENTE QUE SE VA A MOSTRAR

    return(//MI COMPONENTE QUE SE VA A MOSTRAR PODRIA ESTAR  EN OTRO MODULO
      <div className='cajitaDePokemon'>
       <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name} </figcaption>
            <h6>Mi conponente de muestra height: {props.height}</h6>
            <h3>la experience: {props.experience}</h3>
            <p>la orden es: {props.order}</p>
            <p>is_default es: {props.is_default}</p>
            
        
          <hr />


        </figure>
      </div>
       
    );
}




//EL COMPONENTE PADRE
function AjaxHooks() {
//  LA VARIABLE , LA FUNCION PARA MANEJAR EL ESTADO DE MI VARIABLE
const [pokemons, setpokemons] = useState([]);
/*
useEffect(() => {
let json = []
    const getPokemons = async(url) =>{
     let res = await fetch(url)
     json = await res.json(); 
      //console.log(json)
    
    json.results.forEach(async (el) => {
      let res = await fetch(el.url),
        json = await res.json();
        
        //console.log(json)
              let pokemon = {
                  id:json.id,
                  name: json.name,
                  avatar: json.sprites.front_default,
              };

              setpokemons((pokemons) => [...pokemons, pokemon])
            });
         
    }
    
        getPokemons(`http://pokeapi.co/api/v2/pokemon/`);
    },[]);
  */
  

//CADA VEZ QUE RENDERIZEMOS SE VA A MOSTRAR
useEffect(() => {
  let url = `http://pokeapi.co/api/v2/pokemon/`;//PODEMOS PONER CUALQUIER URL

  fetch(url)//aca vamos a buscar la info 
  .then((data) => data.json())//aca tramsformamos la respuesta en un objeto
  .then((data) => {
    data.results.forEach((el) => {//ACA EJECUTAMOS LA DATA.RESULTS QUE ES UNA DATA PRESISA QUE ME 
      //DA LA API
        fetch(el.url)//CON EL PRIMER ELEMENTO QUE ME TRAE BUSCO SU URL Y LE HAGO OTRO FETCH
          .then((res)=> res.json())
        
          .then((json)=> {
            let pokemon = {//ACA CREAMOS UN OBJETO CON TODA LA DATA QUE QUIERA TRAER DE LA API
                id:json.id,
                name: json.name,
                height: json.height,
                experience: json.base_experience,
                is_default: json.is_default,
                order: json.order,
                weight:json.weight,
                avatar: json.sprites.front_default,
               

                
            };
            setpokemons((pokemons) => [...pokemons, pokemon])
          })
    })
  })


}, [])//cada vez que se renderize la app se va a mostrar esto



  return (
    <div>
        <h1>AJAX HOOKS
        <h3>Peticiones asyncronas con hooks</h3>
        {pokemons.length === 0?(
            <h3>Cargando...</h3>
        ):(
            pokemons.map((el) => (
                <PokemonHijoUno key={el.id} name={el.name} avatar={el.avatar}
                experience={el.experience} height={el.height} is_default={el.is_default}
                order={el.order} abilities={el.abilities}/>
            ))
        )}
        </h1>
    </div>
  )
            }

export default AjaxHooks;