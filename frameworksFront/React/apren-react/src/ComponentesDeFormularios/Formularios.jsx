import React, { useState } from 'react'

function Formularios() {

//EL ESTADO DE MI FORMULARIO
  const [form, setForm] = useState({});


  //FUNCION QUE MANEJA LO QUE ESCRIBEN 
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }
  

  const handleSubmit = e => {
    e.preventDefault()
    alert('El formulario se ha enviado')
  }

  return (
    <div>
      <h2>Formularios</h2>
      <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input 
          type="text" 
          id='nombre'
          name='nombre'
          value={form.nombre}
          onChange={handleChange} 
          />
          <br /><br />
          <label htmlFor="">Nacionalidad</label>
          <input 
          type="text" 
          id='nombre'
          name='nacionalidad'
          value={form.nacionalidad}
          onChange={handleChange} 
          />

         



      <br /><br />
      <p>Elige tu Sabor JS Favorite:</p>
          <input 
          type="radio" 
          id='vanilla' 
          name='sabor' 
          value='vanilla'
          onChange={handleChange}
          defaultChecked
           />
          <label htmlFor="vanilla">Vanilla</label>

          <input 
          type="radio" 
          id='react' 
          name='sabor' 
          value='react'
          onChange={handleChange}
           />
          <label htmlFor="react">React</label>

          <input 
          type="radio" 
          id='angular' 
          name='sabor' 
          value='angular'
          onChange={handleChange}
           />
          <label htmlFor="angular">Angular</label>

          <input 
          type="radio" 
          id='vue' 
          name='sabor' 
          value='vue'
          onChange={handleChange}
           />
          <label htmlFor="vue">Vue</label>

          <input 
          type="radio" 
          id='svelte' 
          name='sabor' 
          value='svelte'
          onChange={handleChange}
           />
          <label htmlFor="svelte">Svelte</label>

        <br /><br />
        <p>Elige tu lenguaje de Programacion favorita</p>
        <select name="lenguaje" id="" onChange={handleChange}
        defaultValue=''>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
          </select>
          <br />


          <br /><br />
          <label htmlFor="terminos">Acepto terminos y condiciones</label>
          <input 
          type="checkbox"
          id='terminos'
          name='terminos' 
          onChange={handleChecked} 

          />
          <br/><br/>
          <input type="submit" />
          <br /><br /><br /><br />


      </form>
        
    </div>
  )
}

/*function Formularios() {


  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  const [terminos, setTerminos] = useState('');
  const [lenguaje, setLenguaje] = useState('');


  const handleSubmit = e => {
    e.preventDefault()
    alert('El formulario se ha enviado')
  }

  return (
    <div>
      <h2>Formularios</h2>
      <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Nombre</label>
          <input 
          type="text" 
          id='nombre'
          name='nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} 
          />


      <p>Elige tu Sabor JS Favorite:</p>
          <input 
          type="radio" 
          id='vanilla' 
          name='sabor' 
          value='vanilla'
          onChange={e => setSabor(e.target.value)}
          defaultChecked
           />
          <label htmlFor="vanilla">Vanilla</label>

          <input 
          type="radio" 
          id='react' 
          name='sabor' 
          value='react'
          onChange={e => setSabor(e.target.value)}
           />
          <label htmlFor="react">React</label>

          <input 
          type="radio" 
          id='angular' 
          name='sabor' 
          value='angular'
          onChange={e => setSabor(e.target.value)}
           />
          <label htmlFor="angular">Angular</label>

          <input 
          type="radio" 
          id='vue' 
          name='sabor' 
          value='vue'
          onChange={e => setSabor(e.target.value)}
           />
          <label htmlFor="vue">Vue</label>

          <input 
          type="radio" 
          id='svelte' 
          name='sabor' 
          value='svelte'
          onChange={e => setSabor(e.target.value)}
           />
          <label htmlFor="svelte">Svelte</label>


        <p>Elige tu lenguaje de Programacion favorita</p>
        <select name="lenguaje" id="" onChange={(e) => setLenguaje(e.target.value)}
        defaultValue=''>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
          </select>
          <br />



          <label htmlFor="terminos">Acepto terminos y condiciones</label>
          <input 
          type="checkbox"
          id='terminos'
          name='terminos' 
          onChange={(e) => setTerminos(e.target.checked)} 

          />
          <br/><br/><br/>
          <input type="submit" />
          <br /><br /><br /><br />


      </form>
        
    </div>
  )
}*/

export default Formularios