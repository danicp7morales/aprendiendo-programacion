import React from 'react'
import CrudTableRow from './CrudTableRow'

function CrudTable({data, setDataToEdit, deleteData}) {
  return (
    <div>
        <h3>Tabla de Datos</h3>
        <table>
          <thead>
            <tr> 
              <th>Nombre</th>
              <th>Constelacion</th>
              <th>Nacionalidad</th>
              <th>Position</th>
              <th>Equipo</th>
              <th>ValoDelMercado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
              {data.length === 0 ? (
              <tr>
                <td colSpan='3'> Sin Datos </td>
              </tr>
              ):(
              data.map(el => <CrudTableRow 
                key={el.id} //esto es para react dom pueda organizarse bien
                el={el} //cada uno de mis objetos
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                />) )}
              
            </tbody>

        </table>



    </div>
  )
}

export default CrudTable