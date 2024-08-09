const BASE_URL = 'https://pokeapi.co/api/v2/'; //Añadimos la url base de nuestra página API Pokemon

//*La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto de características más potente y flexible.

/*fetch(BASE_URL + "pokemon/" + 1) //Solicita la info interna, pero aun no la manda hasta este punto para eso usamos then y luego console.
//.then((res) => console.log(res));

// USAMOS MÉTODO PARA CONVERTIR A JSON.
//hasta aqui es sincronico todo
.then((res) => res.json())
.then((data) => console.log(data));*/

//Hacemos ahora para que funcione de manera asíncrona que es lo óptimo

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        console.log(response);
        const parsedData = await response.json();
        console.log(parsedData);
        return parsedData;
    } catch (err) {
        console.error(err);
    }
};

//Renderizamos el botón central
document.getElementById("get-btn").addEventListener("click", async () => {
    const text = document.getElementById("pokemon-name").value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    localStorage.setItem("currentPokemonId", pokemon.id);
    console.log(pokemon.name);
});

//Renderizamos los demás botones
document.getElementById("prev-btn").addEventListener("click", async () => {
    const currentPokemonId = parseInt(localStorage.getItem("currentPokemonId"));
    const newId = Math.max(currentPokemonId - 1, 1);
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
});

document.getElementById("next-btn").addEventListener("click", async () => {
    const currentPokemonId = parseInt(localStorage.getItem("currentPokemonId"));
    const newId = currentPokemonId + 1;
    const pokemon = await fetchPokemon(newId);
    console.log(pokemon.name);
});

// cuando tengo deractmente el fetch, usa GET de manera predeterminada.
//Usando la API para posts:

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
        title: 'title 1',
        body: 'Lorem impsum',
        userId: 1,
    }),
})
.then((res) => res.json())
.then((data) => console.log(data));

