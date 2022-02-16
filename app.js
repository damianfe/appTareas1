const process = require ('process')

const{listarTareas,agregarTarea,actualizarTarea,eliminarTarea, filtrarTareas, buscarTareas} = require ('./tareas copy')

const accion = process.argv[2];
 console.log();

switch (accion) {
    case 'listar':
        listarTareas()
        break;
     case 'agregar' :
         let descripcion = process.argv[3];
         let nuevaTarea = {
             id : new Date(). getTime(),
             descripcion,
             estado : 'pendiente'
         }
         agregarTarea(nuevaTarea)
         break;
         case 'actualizar' :
             actualizarTarea(+process.argv[3])
             break;
              case 'eliminar':
                eliminarTarea(+process.argv[3])
                break; 
                case 'filtrar' :
                    filtrarTareas(+process.argv[3])
                    break;
                    case 'buscar' :
                        buscarTareas(+process.argv[3])
                case undefined :
                    console.log('Debes indicar una accion');
                    break;
              default:
                  console.log('Accion no permitida');
               break;
}






/* const moduloTareas = require ('./tareas') */


/* console.log(agregarTarea()); */
/* let nuevaTarea = {
    id : new Date().getTime(),
    descripcion : 'Aprender React',
    estado : 'en pendiente'
    } */
    
   /* listarTareas(1644326727537) */
  //console.log(Nuevatarea);
  /* listarTareas() */
 // if(descripcion != undefined){ agregarTarea(nuevaTarea); }else{ console.log("no ingreso descripcion") } 