import { httpClientPlugin } from "../../src/plugins/http-client.plugin";


describe('httpClientPlugin', () => {
    test('httpClientPlugin.get() should to return a string', async () => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual(
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }
        );
    });
    test('httpClientPlugin.get() should have POST, PUT and DELETE methods', async () => {
        expect(typeof httpClientPlugin.post).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(typeof httpClientPlugin.delete).toBe('function');
    });
});
