
/**
 * Ej 14 - lvl1
 * Escribe una función llamada checkSeason, toma un parámetro de mes y 
 * devuelve la estación: Otoño, Invierno, Primavera o Verano.
 */

/**
 * Consideramos los valores de mes
 *  ==> 1 - 3 Verano
 *  ==> 4 - 6 Otoño
 *  ==> 7 - 9 Invierno
 *  ==> 10 - 12 Primavera
 */

function checkSeason(mes) { // mes debe tener un valor entre 1 y 12

  /**
      if (condition) {
    
      } else {
    
      }
   */
  if (mes >= 1 && mes <= 3) {
    return "Verano";
  } else if (mes >= 4 && mes <= 6){
    return "Otoño";
  }  else if (mes >= 7 && mes <= 9){
    return "Invierno";
  } else if (mes >= 10 && mes <= 12){
    return "Primavera";
  } 
}


// 3 seria el mes de marzo, la funcion debe devolver Verano
// let estacion = checkSeason(3);
// document.write(estacion);
// console.log(estacion);


/**
 * 15- Math.max devuelve su argumento más grande. 
 * Escriba una función findMax que tome tres argumentos 
 * y devuelva su máximo sin usar el método Math.max. 
 */

function findMax(val1, val2, val3) {
  /**
   * su codigo
   */

  return // retornar el valor maximo entre val1 val2 val3
}


/**
 * Ej 17 - lvl2
 */

function hexaColor(){
  let color = "#"; // color hexa resultado para devolver
  // cadena de caracteres (string) con los valores hexadecimal
  let valoresHexa = "0123456789ABCDEF";

  for (let i = 1; i <= 6; i++){
    // generamos un valor aleatorio entre 0 y el tamaño del string -1
    // Estos valores aleatorios coiciden con los indices del string
    let hexardy = Math.floor(Math.random() * valoresHexa.length);
    color += valoresHexa[hexardy];
  }
  return color;
}

// let hexaGenerado = hexaColor();
// document.write(hexaGenerado)
// document.body.style.backgroundColor = hexaGenerado;

/**
 * Ej 18 - lvl2
 * Declare un nombre de función userIdGenerator. Cuando se llama a esta función, genera una identificación de siete caracteres. La función devuelve el id. Ej: 41XTDbE
 */

function userIdGenerator() {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUabcdefghijk0123456789";
  let identificador = "";
  console.log(caracteres[5]);
  for (let i = 1; i <= 7; i++) {
    let posicion = Math.floor(Math.random() * 42);
    console.log("Posicion N:",posicion);
    console.log("Caracter:",caracteres[posicion]);
    identificador += caracteres[posicion];
  }
  //  let posicion = Math.floor(Math.random() * caracteres.length);
  console.log(identificador);
  return identificador;
}

// userIdGenerator();



/*
1. Modifique la función userIdGenerator. Declare un nombre de función
userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas
usando prompt(). Una de las entradas es la cantidad de caracteres y la
segunda entrada es la cantidad de ID que se supone que se generarán.
**/



/**
 * Ej 2 - lvl3
 * Escribe un nombre de función rgbColorGenerator y genera colores rgb.
 * rgbColorGenerator()
 * rgb(125,244,255)
 */

/**
 * los vaslores rgb van desde 0 a 255
 * tengo que generar 3 valores (red, green, blue)
 */

function rgbColorGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  // "rgb(red, green, blue)"  ==> rgb(125, 244, 255)
  const rgb = "rgb(" + red + ", " + green + ", " + blue + ")"
  return rgb;
}

// let rgbGenerado = rgbColorGenerator();
// document.write(rgbGenerado)
// document.body.style.backgroundColor = rgbGenerado;