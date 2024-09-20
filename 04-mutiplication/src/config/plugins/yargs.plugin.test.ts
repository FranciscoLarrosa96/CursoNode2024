// import { yarg } from "./yargs.plugin";

const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./yargs.plugin');

    return yarg;
}

describe('Test Argv', () => {
    test('test with default values', async () => {
        const yarg = await runCommand(['-b', '5']);
        console.log('Proces->', yarg);

        expect(yarg).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: 'outputs',
        }));
    });
});