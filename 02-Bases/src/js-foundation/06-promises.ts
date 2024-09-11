
import { httpClientPlugin } from '../plugins/http-client.plugin';

export const getPokemonById = async (id: number | string): Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClientPlugin.get(url);
        return pokemon.name;
    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }

    // const response = await fetch(url);
    // const pokemon = await response.json();



    // return fetch(url)
    //     .then((response) => response.json())
    //     .then((pokemon) => pokemon.name);
}

