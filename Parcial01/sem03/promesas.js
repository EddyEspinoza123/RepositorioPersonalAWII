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

function buscarlibroporid(id)
{
  return new Promise((resolve, reject) =>{
    //funcionabilidad
    const libro = libros.find((libro)=> libro.id===id);
    //si el libro no existe
    if(!libro)
    {
      const error = new Error();
      error.message="Libro no encontrado";
      reject(error);
    }
    resolve(libro);

  })

}
function buscarautorporid(id)
{
  return new Promise((resolve, reject) =>{
    const autor = autores.find((autor)=>{
      return autor.id===id;
    })
    if(!autor)
    {
      const error = new Error();
      error.message="Autor no encontrado";
      reject(error);
    }
    libro.autor = autor;
    resolve(autor);
  })

}

buscarlibroporid(1).then((libro)=>{
  console.log(libro);
}).catch((error)=>{
  console.log(error.message);
})
  
/*let libroauxiliar;
buscarlibroporid(1).then((libro)=>{
  libroauxiliar=libro;
  return buscarlibroporid(libro.idautor);
}).then((autor)=>{
  libroauxiliar.autor=autor;
  console.log(libroauxiliar);
}).catch((error)=>{
  console.log(error.message);
})*/

/*buscarlibroporid(1).then((libro)=>{
  return buscarlibroporid(libro);
}).then((libro)=>{
  console.log(libro)
}).catch((error)=>{
  console.log(error.message)
})*/

