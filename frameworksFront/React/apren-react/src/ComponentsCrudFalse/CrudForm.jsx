import React, { useState, useEffect } from 'react'


//                    DATA...BASE(DATOS)
//ACA PUEDO AGREGAR TODO LO QUE QUIERA ESTO NO FORMA PARTE DEL COMPONENTE POR ESO VA A FUERA
const initialForm = {
    name:'',
    constellation:'',
    posicion:'',
    equipo:'',
    nacionalidad:'',
    valorDelMercado:'',
    id: null
};







//ACA NOS TRAEMOS LAS FUNCIONES DE LA APP Y LA DATA 
function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {
    
//ESTE ES EL ESTADO DE MI FORMULARIO es un {}
    const [form, setForm] = useState(initialForm);

  
    useEffect(() => {
      if(dataToEdit){
        setForm(dataToEdit);
      }else{
        setForm(initialForm);
      }
    }, [dataToEdit]);


//FUNCIONES DE MI FORMULARIO
  //MANEJA EL CAMBIO DE MI ESTADO DE MI FORM
    //MANEJAMOS EL CAMBIO DE MIS INPUS DEL ESTADO DE MI FORM
    const handleChange = (e) =>{//ESTA FUNCION ES PARA MANEJOS DE FORMULARIOS ES6
      setForm({//LO QUE SE ESCRIBA EN EL INPUT ESE VA ASER MI EVENTO (e)
        ...form,//ACA HACE UNA COPIA DE COMO ESTE MI FORMULARIO PARA NO PISAR LA INFO QUE YA ESTA
//PRIMERO PONEMOS CON DESTRUCTURACION ME TRAIGO EL NOMBRE DEL EVENTO : DESPUES ME TRAIGO
//EL VALOR QUE ME INGREASRON EN EL INPUT  
        [e.target.name]: e.target.value,// name, constellation : el valor que me ingresan por el input
      })
    };


//ESTA FUNCION MANEJA EL ENVIO DEL FORM
    const handleSubmit = (e) =>{
      e.preventDefault();

      //SIN EN ALGUN CASO DE QUE NO HAYGA ALGO EN ALGUNOS DE LOS INPUS LE TIRAMOS EL ALERTA
      if (!form.name || !form.constellation || !form.posicion || !form.equipo || !form.nacionalidad || !form.valorDelMercado){//Y CORTAMOS CON EL RETURN
        alert('No se han completado todos los campos de textos DANY...');
        return
      }
      //ACA UTILIZAMOS LAS FUNCIONES QUE ME TRAJE POR DEFECTO DE LA APP  PRINCIPAL
      if(form.id === null) {
        //NO ESTE EN NULL CREAMOS LA DATA
        createData(form)
      }else{//SI NO CARGAMOS LA DATA
        updateData(form)
      }
      handleReset()//VOLVEMOS A PONER MI ESTADO EN SU INCIO
       
    };

    const handleReset = (e) =>{
      setForm(initialForm)
      setDataToEdit(null)
    }


    
    
  return (
    <div>

       <h3>{dataToEdit ? 'Editar': 'Agregar'}</h3>

       <form onSubmit={handleSubmit} >{/* */}

        <input type="text" name='name' placeholder='Nombre' 
        onChange={handleChange} value={form.name} />

        <input type="text" name='constellation' placeholder='Constelacion' 
        onChange={handleChange} value={form.constellation} />

       <input type="text" name='posicion' placeholder='Posicion' 
        onChange={handleChange} value={form.posicion} />

       <input type="text" name='equipo' placeholder='Equipo' 
        onChange={handleChange} value={form.equipo} />

        <input type="text" name='nacionalidad' placeholder='Nacionalidad' 
        onChange={handleChange} value={form.nacionalidad} />

        <input type="text" name='valorDelMercado' placeholder='valorDelMercado' 
        onChange={handleChange} value={form.valorDelMercado} />


        <input type="submit" value='Enviar' />

        <input type="reset" value='Limpiar' onClick={handleReset} />

       </form>

    </div>
  )
}

export default CrudForm;