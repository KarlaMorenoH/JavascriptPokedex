// EJERCICIO BURGER KING
// Ticket sería la solicitud de una promesa de darte tu orden, que depende de las peticiones que hay antes
// cuando obtienes tu promesa, hay una API(mesero*) que es la que pasa tu comanda con tu orden
//Vamos a crear una función que describa una orden(promesa)
//Vamos a simular el transcurso del tiempo con set timeout para un servidor (p.e. 2segundos)
//Regresamos al método una respuesta Res()

function orderBurger(burgerType) {
    return new Promise((resolve, reject) => {
        console.log(`Estamos preparando tu ${burgerType},`);
        setTimeout(()=> {
            console.log(`${burgerType} esta lista`);
            resolve(`Aquí está su orden: ${burgerType}`); //Aqui podemos intercalar resolve y reject para ver el comportamiento
        }, 2000);
    });
}


/*Creación de la orden
console.log("Ordenando hamburguesa...");
orderBurger("Cheeseburger")
.then((order) => console.log(order))
.catch((err) => console.error("Error durante la orden", err));
*/

// EXPLICACIÓN: se crea con la palabra clave "new", nueva implementación del objeto "promesa"
//Creamos un callback para que nuestra promesa sepa qué se va a ejecutar.
//En el paréntesis mas adentro podemos colocar la aceptación o rechazo de nuestra promesa (parámetros de callbanck)
//Después de la flecha todo lo que sigue se va a ejecutar
//BLOQUES DE TIPO CALLBACK: p.ej, usar un método .then, una vez que ejecutes la promesa, entonces...
//El catch es para "atrapar" errores cuando no se ejecuta una promesa.

//REalizarlo ahora de forma asíncrona

async function orderAndServe(burgerType) {
    try {
        console.log("ordenando su pedido...");
        const order = await orderBurger(burgerType);
        console.log(order);
    } catch (err) {
        console.error(err)
;    }
    
}

orderAndServe("Portobello");

// constante para guardar la respuesta de mi orden en const order.
//Para esperar la promesa ponemos "await"
// Usamos try, para que la función intente primero algo 