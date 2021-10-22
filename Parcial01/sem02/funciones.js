function saludar(nombre) 
{
  return `Hola como esta ${nombre}`;
}

const saludar2 = function (nombre)
{
  return `Hola como esta ${nombre}`;
}

const saludar3  =  (nombre)=>
{
  return `Hola como esta ${nombre}`;
}
function mostrarfuncionparasaludar(fin, parametro)
{
  console.log(fin,(parametro));
}

mostrarfuncionparasaludar(saludar2, "John");