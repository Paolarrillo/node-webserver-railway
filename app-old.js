const http = require('http');

//req peticion url, res es respuesta
http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type':'text(plain'}) //Indica el tipo de infromacion
    // res.writeHead(404) //Se manda el estado a voluntad, ej 404 es no encontrado

    res.write('Hola mundo')
    res.end() //Es necesario para que sepa que la funcion termino y no hay mas instrucciones por correr
})
.listen(8080); //Puerto

console.log('Escuchando el puerto', 8080)