const fs = require('fs');
const tareas = require('./tareas.json');
const guardarJSON = (tareas) => {
    fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,3));
    return null
    } 
const mostrarTareas =(tareas) =>{
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1} - ${tarea.descripcion} - estado: ${tarea.estado} - ID: ${tarea.id} `);
    });
    return null
}    
module.exports = {
     

    listarTareas :() =>{
        mostrarTareas(tareas)
        return null
    },

     agregarTarea :(tarea) =>{
        tareas.push(tarea);
        guardarJSON(agregarTarea)
       
        return console.log('Tarea agregada!!')
    },
    actualizarTarea :(id) =>{
        
          let check = tareas.filter(tarea => tarea.id === id)
           
          if(check.length === 0){
              
            return console.log('ID inexistente');
          }

           let tareasActualizadas = tareas.map(tarea =>{
              if(tarea.id === id){
                  
                tarea.estado = 'completado!'
                return tarea
              } 
              return tarea
           })
           guardarJSON(tareasActualizadas)

        return console.log('Tareas actualizadas')
    
    },
    eliminarTarea :(id) => { 

       let tareasFiltradas = tareas.filter (tarea => {
           return  tarea.id !== id
       })


       guardarJSON(tareasFiltradas)


        return console.log('Tarea eliminada'); 
   },
   filtrarTareas : (estado) => {

    let estadosValidos = ['completado','en proceso', 'pendiente'];
    
    if(!estadosValidos.includes(estado)){
    return console.log('Estado no válido', estadosValidos);
    }
    
    let tareasFiltradas = tareas.filter((tarea) => {
    return tarea.estado === estado
    });
    
    mostrarTareas(tareasFiltradas)
    return null
    
    },
    buscarTareas : (keyword) => {

        let resultado = tareas.filter(tarea => {
            return tarea.descripcion.toLocaleLowerCase().includes(keyword)
        })

        buscarTareas(resultado);
        return null
    }
}