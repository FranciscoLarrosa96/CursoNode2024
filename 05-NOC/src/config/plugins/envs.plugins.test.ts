import { envs } from "./envs.plugins";


describe('envs.plugins.test', () => {
    test('should return env options', () => {
        expect(envs).toEqual(
            {
                PORT: 3000,
                MAILER_SERVICE: 'gmail',
                MAIL: 'franciscolarrosa22@gmail.com',
                MAILKEY: 'test',
                PROD: false,
                MONGO_URL: 'mongodb://francisco:123456789@localhost:27017/',
                MONGO_DB_NAME: 'NOC-TEST',
                MONGO_USER: 'francisco',
                MONGO_PASS: '123456789'
            }
        );
    });

    test('should return error if not found env', async() => {

        jest.resetModules();
        process.env.PORT = 'abc';
        try {
            await import('./envs.plugins');
            expect(true).toBe(false);
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }   
    });

});