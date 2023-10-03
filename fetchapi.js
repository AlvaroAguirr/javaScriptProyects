// Fetch una funcino para obetner recuros 

// nso retorna una promesa
// then y catch


console.log("inicia peticion");
fetch('http://127.0.0.1:5500/respuesta.txt')
.then(result => result.text())
.then(datos => console.log(datos));

console.log("inicia peticion");
fetch('http://127.0.0.1:5500/respuesta.json')
.then(result => result.text())
.then(datos => console.log(datos));