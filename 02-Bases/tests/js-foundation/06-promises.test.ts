import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('06.promises', () => {

    test('getPokemonById should return a pokemon', async () => {
        const id: number = 1;
        const pokemonName = await getPokemonById(id);
        expect(pokemonName).toBe('bulbasaur');
    });
    // ASi testeo una excepcion de una funcion
    test('getPokemonById should return a error if pokemon does not exist', async () => {
        const pokemonId = 101111111;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }

    });
});