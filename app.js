// asigno el paquete express en una const con require y luego le asigno el valor const a express como funcion
// creo un puerto con un valor de 4000 para arriba para evitar la forma local
const express = require('express')
const app = express()
const port = 4000

const sumar = require('./suma')

// le asigno los modulos dentro de una funcion
async function operaciones(){
    const operar = {}
    app.get('/suma/:numero1/:numero2', (req,res) => {
        console.log(`resultado de suma: ${sumar}`)
    })
}

operaciones()

app.get('/',(req,res) => {
    res.send(`el servidor se encuentra en el puerto: ${port}`)
})

// le asigno a app que de error y le envio un mensaje de busqueda
app.all('*',(req,res)=>{
    res.send('no se encontró la web...')
})

// si el app del host esta en 4000 el servidor es correcto
app.listen(port,()=>{
    console.log(`el servidor está en el puerto: ${port}` )
})
