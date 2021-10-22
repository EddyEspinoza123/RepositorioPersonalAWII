//1. Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.
let tablademultiplicar = (valor, iteracion = 1) => {

  if (iteracion > 12) {
      return;
  }

  console.log(`${valor} x ${iteracion} = ${valor * iteracion}`);
  return tablademultiplicar(valor, iteracion + 1 );
}

console.log(" Tabla de Multiplicar: ");
tablademultiplicar(5);

//2. Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color
let mascota = {
  Nombre:"Firulai",
  Edad:" 8 meses ",
  Color:"Blanco",
};

console.log(mascota);

//3. Definir un arreglo con sus comidas favoritas.
let ComidasFavoritas = [
  "Carne", 
  "Pollo", 
  "Pescado", 
  "Pan",
  "croquetas"
];
console.log(ComidasFavoritas[3]);

//4. Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.
let mapArreglo = (arr) => {
  let x = 0;

  do{
    console.log(arr[x]);
    x++;
  } while (x < ComidasFavoritas.length); 

}
console.log(" Comidas Favoritas: ");
mapArreglo(ComidasFavoritas);

//5. Crear una funcion flecha que reciba un elemento del arreglo de comidas favoritas y lo devyelva en mayuscula.
let Mayus = (elemento) =>{
  console.log(elemento.toUpperCase());
}
console.log("Transformando en Mayuscula: ");
Mayus(ComidasFavoritas[4]);