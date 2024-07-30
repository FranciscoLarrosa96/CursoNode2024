const { http } = require('../../plugins');

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);


    // const response = await fetch(url);
    // const pokemon = await response.json();
    
    return pokemon.name;

    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name);
}

module.exports = {
    getPokemonById,
}