//* Ejercicio 1: Consumo de una API y Procesamiento de Datos
    //? Descripción:
    // Utilice fetch para obtener una lista de usuarios desde la API pública de
    // JSONPlaceholder. Luego, procese los datos para extraer y mostrar en la consola los
    // nombres y correos electrónicos de los usuarios.

// ?    Instrucciones:
    // 1. Haga una petición GET a https://jsonplaceholder.typicode.com/users Utilizando fetch.
    // 2. Convierte la respuesta en formato JSON.
    // 3. Utilice un ciclo (for o forEach) para iterar sobre los usuarios.
    // 4. Por cada usuario, muestra en la consola su nombre y correo electrónico.
    // 5. Maneja posibles errores Utilizando .catch() o un bloque try...catch si usa async/await.


async function obtenerUsuarios() {
    try{
        console.log("Obteniendo usuarios...");
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();    
        
        let users = [];
        
        usuarios.forEach(usuario => {
            users.push({nombre: usuario.name, email: usuario.email});
        });

        return users;
    }
    catch(error){
        console.error("Error: ", error);
    }
}

obtenerUsuarios()
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.error("Error: ", error);
    })
