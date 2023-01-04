import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getById, clear} from '../Redux/actions'
import { useParams } from 'react-router-dom'

function Detail() {

//ESTO ME TRAE LO QUE LLEGO COMO PARAMETRO EN MI URL
  let params = useParams()//EN CLASES SERIA PROPS.MATCH.PARAMS.ID


  let dispatch = useDispatch()

  let detail = useSelector(state => state.productDetail)//VIENE DE REACT REDUX USESELECTOR
  //ME PERMITE ACCEDER A EL ESTADO QUE LE PIDA

  let loading = useSelector(state => state.loading)//

  React.useEffect(() => {
    dispatch(getById(params.id));
    dispatch(clear())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  return (
    <div>

      {loading? <img src='https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-loading-logo-design-circle-loading-illustration-on-white-background-png-image_1996461.jpg' 
         alt='cargando...' /> : <div>
          <h3>{detail.title}</h3>
          <img src = {detail.url} alt='img cargando...'/>
        </div>
      }

    </div>
  )
}

export default Detail