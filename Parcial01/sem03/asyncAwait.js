const libros = [
  {
    id:1,
    titulo: 'SISTEMAS DISTRIBUIDOS NODEJS' ,
    idautor:1
  },
   {
    id:2,
    titulo: 'APRENDIENDO JS' ,
    idautor:2
  },
   {
    id:3,
    titulo: 'CLEAN CODE JS' ,
    idautor:3
  }
]

const autores = [
  {
    id:1,
    titulo: 'Pedro Miguel' 
  },
   {
    id:2,
    titulo: 'Juan Andres' 
  },
   {
    id:3,
    titulo: 'Julio Verme' 
  },
]

async function buscarlibroporid(){
  const libro = libros.find((libro)=> libro.id===id);
  if(!libro)
  {
    const error = new Error();
    error.message="No encontramos el libro";
    throw error;
  }
  return libro;

}
async function buscarautorporid(){


}

async function main()
{
  const libro = await buscarlibroporid(1);
  const autor = await buscarautorporid(libro.idautor);
  libro.autor = autor;
  console.log(libro);
}
main();