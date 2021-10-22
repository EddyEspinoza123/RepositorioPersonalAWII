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


function buscarlibroporid(id, callback) {
    const libro = libros.find((libro)=> libro.id===id);
    if(!libro)
    {
      const error = new Error();
      error.message = "Libro no encontrado"
      return callback(error) ;
    }
    callback(null, libro)
}
function buscarautorporid(id, callback) {
  const autor = autores.find((autor)=>{
    return autor.id===id;
  })
  if(!autor)
  {
    const error = new Error();
    error.message = "Autor no encontrado"
    return callback(error)
  }
  return callback(null, autor)
  
}

buscarlibroporid(2, (err, libro)=>{
  if (err)
  {
    console.log(err.message);
    return;
  }
  buscarautorporid(libro.idautor, (err, autor)=>{
    libro.autor = autor;
    delete libro.idautor;
    console.log(libro);
  })
})