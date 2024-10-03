// *Ejercicio 2: Simulación de una Operación Asíncrona con Promesas
// ?Descripción:
    /* Cree una función que simule una operación asíncrona, como una consulta a una
    base de datos, que tarda 3 segundos en completarse. La función debe devolver una
    promesa que se resuelve con un mensaje de éxito o se rechaza con un mensaje de
    error basado en una condición aleatoria.*/
// ?Instrucciones:
    /*1. Define una función consultarBaseDeDatos() que devuelva una promesa.
    2. Dentro de la función, Utilice setTimeout para simular un retraso de 3
    segundos.
    3. Genera un número aleatorio para decidir si la promesa se resuelve o se
    rechace .
    4. Si el número es par, resuelve la promesa con el mensaje "Consulta exitosa".
    5. Si el número es impar, rechace la promesa con el mensaje "Error en la
    consulta".
    6. Llama a la función y maneja el resultado con .then() y .catch()*/


function consultarBaseDeDatos(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{            
            let a = Math.floor(Math.random()*10)+1
            console.log("Numero aleatorio:" ,a)
            if(a%2==0){
                resolve("Consulta exitosa")
            }
            else{
                reject("Error en la consulta")
            }
        })
    });
}

consultarBaseDeDatos()
    .then((mensaje)=>{
        console.log(mensaje)
    })
    .catch((err)=>{
        console.error(err)
    })