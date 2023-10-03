const teams= ["liverpool", "Dortmun","Chelsie"];

setTimeout(() =>console.log('Tarea asincrona'), 2000);

console.log("sigue ejecutando")
console.log(teams);

function getTeams(){
    return teams;
}

function asincGeTeams(){
    setTimeout(()=> teams, 2000);
}

console.log(getTeams());
console.log('final de codigo');

console.log(asincGeTeams());
console.log('termina el llamado de funcion');
