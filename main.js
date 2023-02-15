// ejercicio 1 

// clear


// ejercicio 2

// function vegan(invitados) {
//   let invitados = {
//     luna: {vegan: false},
//     sebas:{vegan: false},
//     marce:{vegan: false},
//     nicky:{vegan: true}
//   };

//   // let nuevoInvitados = Object.values(invitados);
//   console.log(Object.values(invitados));
//   }


// let invitados = {
//     luna: {vegan: false},
//     sebas:{vegan: false},
//     marce:{vegan: false},
//     nicky:{vegan: true}
//   };

  // let nuevoInvitados = Object.values(invitados);
  // console.log(Object.values(invitados));

  // function fakeBinary(size) {
  //   // La funcion llamada 'fakeBinary' recibe como argumento size(tamaño) que es un numero (entero)
  //   // y debe devolver un string de 1s y 0s con el tamaño indicado.
  //   // siempre empieza por 1
  //   // Por ej:
  //   // fakeBinary(10) devuelve "1010101010"
  //   // fakeBinary(3) devuelve "101"
  //   // Tu código aca:


  // function fakeBinary(size) {

  //   let result = '';
  //   for (let index = 0; index < size; index++) {
  //     if (index % 2 === 0) {
  //       result += '1';
  //     }else{
  //       result += '0';
  //     }
      
  //   }
  //   return result;
  // }
  // console.log(fakeBinary(9));
  
  // }

  // function puntosDelEquipo(array) {
  //   // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  //   // en este formato ["3:1", "2:2", "0:1", ...]
  //   //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  //   //que su resultado es el primero en cada string
  //   // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  //   // Tu código aca:

    // let result = ["3:1", "2:2", "0:1"];
    // function puntosDelEquipo(array) {
    //   let point = 0;
    //   for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     if (element[0] > element[2]) {
    //       point += 3;
    //     }else if (element[0] === element[2]){
    //       point += 1;
    //     }
    //   }
    //   return point;
    // }

    // console.log(puntosDelEquipo(result));

  
  // }
  
  // // No modifiques nada debajo de esta linea //
  
  // function ideas(array) {
  //   // La funcion llamada 'ideas' recibe un array 'array' de strings como parametro
  //   // entre estas ideas hay algunas buenas y otras no, si no encontramos una 'buena' retornamos 'Fail!'
  //   // si encontramos por lo menos una 'buena' retornamos 'Activa!'
  //   // y si encontramos al menos 3 'buena' retornamos 'Jackpot!'
  //   // Por ej:
  //   // ideas(['hola', 'palabra']) debe devolver 'Fail!'
  //   // ideas(['hola', 'buena', 'hi']) debe devolver 'Activa!'
  //   // Tu código aca:
  
  // }

  function ideas(array) {

    let good = 0;

    array.filter(arr => {
      if (arr === 'buena') {
        good++;
      }
    }
    )
    if (good === 0) {
      return 'fail';
    }else if (good >= 1 && good < 3){
      return 'activa';
    }else if(good >= 3){
      return 'jackpot'
    }
      
    }

    console.log(ideas(['hola', 'buena', 'hi','buena','buena','buena']));

