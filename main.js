//ejercicio 1 

function buscandoAWally(array) {
  let wally = array.indexOf('wally');
  return `Wally se encuentra en la posicion ${wally} del arreglo`;
}

console.log(buscandoAWally(['carlos','luis','wally',]));
