import { ServerApp } from "./presentation/server-app";




describe('Test App', () => {
    test('Should call Server.run with values', async () => {

        const serverRunMock = jest.fn();

        ServerApp.run = serverRunMock;

        process.argv =
            [
                'node',
                'app.ts',
                '-b',
                '10',
                '-l',
                '5',
                '-s',
                '-n',
                'test-file',
                '-d',
                'test-destination'
            ];

        await import('./app');


            //No ejecuta la creacion de tabla ni archivo
            // Solo verifica que ServerRun sea llamado con los argumentos
        expect(serverRunMock).toHaveBeenCalledWith(
            {
                base: 10,
                limit: 5,
                showTable: true,
                nameFile : 'test-file',
                destinationFile: 'test-destination'
            }
        );
    });
});