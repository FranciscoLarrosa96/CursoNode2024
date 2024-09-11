import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks', () => {
    test('GetUserById should return an error if user not exist', (done) => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`USUARIO NO ENCONTRADO ${id}`);
            expect(user).toBeUndefined();
            // Es para que espere a que tenga un resultado
            done();
        });

    });
    test('GetUserById should return a Francisco', (done) => {
        const id = 1;
        getUserById(id, (err, user) => {
            
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'Francisco'
            });

            // Es para que espere a que tenga un resultado
            done();
        });

    });
});