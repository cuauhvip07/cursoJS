const numeros = [10,20,30,40]

const [primero,segundo] = numeros // Se le puede poner el nombre que quieras
console.log(primero)

const [uno, ...demas] = numeros // Descriminar un numero
console.log(demas)


const [prim, , ,cuatro] = numeros // Agarrar el ultimo valor
console.log(cuatro)