// *Ejercicio 5: Gestión de Tareas Pendientes
// ?Descripción:
    /*Desarrolla una pequeña aplicación que gestione una lista de tareas. Cada tarea tiene
    una descripción y un estado de completado. Implementa funcionalidades para
    agregar tareas, marcarlas como completadas y listar las tareas pendientes y
    completadas.*/
// ?Instrucciones:
    /*1. Cree un array tareas para almacenar las tareas.
    2. Define funciones para:
    o Agregar una tarea: Agrega un objeto al array con descripcion y
    completada (inicialmente false).
    o Marcar una tarea como completada: Cambia el estado de
    completada a true para una tarea específica.
    o Listar tareas pendientes: Muestra las tareas que no están
    completadas.
    o Listar tareas completadas: Muestra las tareas que están
    completadas.
    3. Agrega algunas tareas Utilizando la función de agregar.
    4. Marca algunas tareas como completadas.
    5. Lista las tareas pendientes y completadas.*/


// let tareas = [
//     {descripcion: 'Hacer backup', completada: false},
//     {descripcion: 'Estudiar JavaScript', completada: false},
//     {descripcion: 'Ir al supermercado', completada: false}
// ]
let tareas = []

function agregarTarea(tarea){
    tareas.push(
        {descripcion: tarea, completada: false}
    )
}
function marcarTareaComoCompletada(tareaCompletada){
    tareas.forEach((tarea)=>{
        if(tarea.descripcion === tareaCompletada){
            tarea.completada = true
        }
    })
}

function listarTareasPendientes(){
    console.log(tareas.filter((tarea)=> !tarea.completada))
}

function listarTareasCompletadas(){
    let completadas = tareas.filter((tarea)=> tarea.completada)
    console.log(completadas)
}


// Agregar tareas
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");
// Marcar tareas como completadas
marcarTareaComoCompletada("Comprar leche");
// Listar tareas
console.log("pendientes: ")
listarTareasPendientes();

console.log("completadas: ")
listarTareasCompletadas();