/* noticias sobre los deportes y su respectivo ambito con el presentador de la informacion
*/
const newsdeportes = [ 
  {
    id:1,
    noticiasfutbol:"El seleccionado Ecuatoriano empato por la minima en Barranquilla",
    idresponsable: 2
  },
  {
    id:2,
    noticiasfutbol:"Emelec primer finalizta en LigaPro",
    idresponsable:3
  },
  {
    id:3,
    noticiasfutbol:"Rafael nadal gano su partido en el ATP de Moscu",
    idresponsable:1
  }
]

const ambito = [ 
    {
      id:1,
      responsable:"Eliminatorias Sudamericanas",
    },
    {
      id:2,
      responsable:"Liga Pro A Ecuador",
    },
    {
      id:3,
      responsable:"Tenis ATP Moscu",
    }
  ]

const presentador = [
    {
      id:1,
      nombre:"Martin Soza"
    },
    {
      id:2,
      nombre:"Diego Lara"
    },
    {
      id:3,
      nombre:"Vito muñoz"
    }
   ]
    
   //console.log(presentador);

   // FUNCION ASYNC-AWAIT
 async  function notificafutbol(id) {
     const notifutbol = newsdeportes.find((notifutbol)=> notifutbol.id=== id);
     if(!notifutbol)
     {
       const error = new Error();
       error.message = "No se encontro la noticia";
       throw error;

     }
     return notifutbol;
   }

   newsdeportes.forEach(async(notifutbol)=>{
     const  noticia = await notificafutbol(notifutbol.id);
     console.log(noticia);
   })

   //PROMESA
   function noticiaFutbol(id)
   {
     return new Promise((resolve, reject)=>{
     const notifutbol = newsdeportes.find((notifutbol)=> notifutbol.id=== id);
     if(!notifutbol)
     {
       const error = new Error();
       error.message="No se pudo encontrar la noticia";
       reject(error);

     }
     resolve(notifutbol);
     })
   }

   function buscarPresentadorEncargado(notifutbol)
   {
     return new Promise((resolve, reject)=>{
       const responsable = presentador.find((responsable)=>{
         return responsable.id == notifutbol.idresponsable;

       })
       if(!responsable)
       {
         const error = new Error();
         error.message="No se encontro el presentador";
         reject(error);
       }
       notifutbol.responsable = responsable;
       resolve(notifutbol);
     })
   }
   
   noticiaFutbol(2).then((notifutbol)=>{
     return buscarPresentadorEncargado(notifutbol);
   }).then((notifutbol)=>{
     console.log(notifutbol)
   }).catch((error)=>{
     console.log(error.message)
   })
   
