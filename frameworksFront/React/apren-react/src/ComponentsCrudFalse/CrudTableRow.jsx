import React from 'react'
//crudTableRow es el hijo se CrudTableRow
function CrudTableRow({el, setDataToEdit, deleteData}) {
  let {name, constellation, id ,nacionalidad, equipo, posicion, valorDelMercado }= el;
  return (
    
    
            <tr> 
              <td>{name}</td>
              <td>{constellation}</td>
              <td>{posicion}</td>
              <td>{nacionalidad === 'argentino' || nacionalidad === 'Argentino'? nacionalidad : alert('No es argentino no sera tomado en cuenta')}</td>
              <td>{equipo}</td>
              <td>{valorDelMercado > 9999999 ? valorDelMercado : alert('No sera tenido en cuenta')}</td>
              <td>
                  <button onClick = {()=> setDataToEdit(el)}>Editar</button>
                  <button onClick = {()=> deleteData(id)}>Eliminar</button>
                 
              </td>
            </tr>
                

      
    
  )
}

export default CrudTableRow