const express = require('express')
const app = express()
const port = 3000

//ACA ESTARIAN LOS QUE TRABAJAN PARA LA BASE DE DATOS
//si el front le pega a la / le mandamos esto
app.get('/', (req, res) => {
  res.send('Hello World! como estan todos')
})

app.get('/dany', (req, res) => {
    res.send('Hello World! como estas dany')
})

app.get('/sabry', (req, res) => {
    res.send('Hello World! te amo sabruchi')
})

app.get('/front', (req, res) => {
    res.send('Hello World! que quiere el front')
  })

app.get('/baseDeDatos', (req, res) => {
    res.send('Hello World! que quieres de mi base')
  })

app.get('/gatitos', (req, res) => {
    res.send('quieres todos los gatitos...A por ello')
  })













app.listen(port, () => {
  console.log(`El Ejenplo esta listo en el puerto ${port}`)
})

//node index.js