/*const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=> {
    const read = fs.createReadStream('./ArchivoHTML/index.html')
    read.pipe(res)
})

server.listen(3000)
console.log(`puerto ${3000}`)*/

const express = require("express");
const app = express();
const port = 3001;

//aca dibujamos la ruta

app.get("/", (req, res) => {
  //aca le mando la info que la ruta tiene configurado
  res.sendFile("./ArchivoHTML/index.html", {
    root: __dirname,
  });
});



app.get("/get", (req, res) => {
  res.send("me traigo info de mi back");
});

app.post("/post", (req, res) => {
  res.send("traigo info desde el cliente");
});

app.delete("/delete", (req, res) => {
  res.send("elimino una info que el cliente desee eliminar de mis datos en el back");
});

app.put("/put", (req, res) => {
  res.send("modifico alguna info de mi back");
});

app.use("*", (req, res) => {
  res.send("No se encontro tu pagina dany");
});










//mi puerto
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
