//COMPONENTE PADRE ES DE UNA SOLA PAGINA
import React, { useState } from 'react';//imrs

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

//LA DATA LA PODEMOS CREAR EN OTRO ARCHIVO , PODEMOS TRAER INFO DE UNA API, 
//O DESDE UNA BASE DE DATOS

const initialDb = [ //DATABASEFALSA, API, BASEDEDATOS
    {
        id: 1,
        name: 'EMILIANO MARTINEZ',
        constellation: 'sagitario',
        posicion:'portero',
        equipo:'Bayer Munich',
        nacionalidad:'Argentino',
        valorDelMercado:50000000
    },

    {
        id: 2,
        name: 'CRISTIAN ROMERO',
        constellation: 'Dragon',
        posicion:'Defensor',
        equipo:'Totenham',
        nacionalidad:'Argentino',
        valorDelMercado:55000000
    },

    {
        id: 3,
        name: 'HUEVO ACUÑA',
        constellation: 'Cisne',
        posicion:'LTIzquierdo',
        equipo:'Sevilla',
        nacionalidad:'Argentino',
        valorDelMercado:35000000
    },

    {
        id: 4,
        name: 'NAHUEL MOLINA',
        constellation: 'Andromeda', 
        posicion:'LTDerecho',
        equipo:'ATL.Madrid',
        nacionalidad:'Argentino',
        valorDelMercado:90000000
    },

    {
        id:5 ,
        name: 'Enzo Fernandez',
        constellation: 'Fenix', 
        posicion:'MedioCompleto',
        equipo:'Real Madrid',
        nacionalidad:'Argentino',
        valorDelMercado:100000000
    },



];

//LA APP PRINCIPAL
function CrudApp() {
    const [db, setDb] = useState(initialDb)//Data base ya cargamos la data

    const [dataToEdit, setDataToEdit] = useState(null);//use


//const crearDatos = (resibir la Data) funcion
//A FUTURO MIS ACTIONES CON REDUX LAS FUNCIONES QUE CREAMOS 
//  REDUCERS se trae como MODULE
   const createData = (data) => {//ESTO ME CREA UN OBJETO, UN NUEVO REGISTRO DE DATOS
    data.id = Date.now();
    setDb([...db, data])//aca me crea  la data
   };

   //ESTA FUNCION ME CARGA LA DATA
   const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data: el );
    setDb(newData);
   };

   //ESTA FUNCION PARA ELIMINAR LA DATA
   const deleteData = (id) => {
    let isDelete =window.confirm(//ESTO ME DA UN VALOR BOOLEANO
        `estas seguro de eliminar el id ${id} DANY`
    );
    if(isDelete){
        let newData = db.filter(el => el.id !== id)//SI EL ID ES IGUAL NO LO CARGUES
        setDb(newData)//ACTUALIZAMOS EL ESTADO
    }else{
        return;
    }
   };



  return (
    <div>
        <h2>CRUD APP</h2>
        <article >
        {/*ACA TENEMOS LOS COMPONENTES QUE VAMOS A MOSTRAR
        POR PROPS LE PASAMOS LAS FUNCIONES Y LA DATA */}
        <CrudForm 
        createData={createData} 
        updateData= {updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <hr />
        <CrudTable 
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}/>
        </article>
        
    </div>
  );
}

export default CrudApp
/*rfce,  */