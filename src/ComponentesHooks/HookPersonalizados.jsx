import React from 'react'
import {useFetch} from './UseFetch'

function HookPersonalizados() {
  let url = `http://pokeapi.co/api/v2/pokemons/`;
  url = `https:jsonplaceholder.typicode.com/users`;
  console.log(useFetch());

  let {data, isPending, error} = useFetch(url)
  return (
    <div>
        <h1>CUSTON HOOKS</h1>
        <h3>{JSON.stringify(isPending)}</h3>
        <h3>
          <mark>{JSON.stringify(error)}</mark>
        </h3>
        <h3>
          <pre style={{whiteSpace:'pre-wrap'}}><code>
          {JSON.stringify(data)}
          </code></pre>
        </h3>
        
        
     </div>
  )
}

export default HookPersonalizados