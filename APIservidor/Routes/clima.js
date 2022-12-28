//aca vamos haser una llamada a la api weather!
//codigo asyncrono

const express = require('express')

const router = express.Router()

const axios = require('axios')

const apiKey = '91d6b984ee1adf5114775201dd941300';

router.get('/:ciudad', async (req, res) =>{
//TRY CATCH
    try{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&appid=${apiKey}&units=metric`)
        const data = {
            id: response.data.id,
            name: response.data.name
        }
        res.send(data) 
    }
    catch(e){ 
        res.status(400).send(e.toString())
    }
    
} )
/*
router.get('/:ciudad',(req, res) =>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&appid=${apiKey}&units=metric`)
    

    //response es lo que me trajeron , y res es como se lo estoy enviando
    .then(response => res.send({
        name: response.data.name,
        id: response.data.id,
        coord : response.data.coord,
        visibility : response.data.visibility 
    

    }))
    .catch(e => res.send(e))
})
*/
module.exports = router
