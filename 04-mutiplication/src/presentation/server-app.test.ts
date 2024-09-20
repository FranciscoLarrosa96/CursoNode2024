import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('server app test', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        nameFile: 'testName',
        destinationFile: 'test-destination',
    };


    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('', () => {
        const serverapp = new ServerApp();
        expect(serverapp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    describe('server app test with options', () => {

        // const logspy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        // ServerApp.run(options);
        // expect(logspy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     destination: options.destinationFile,
        //     fileName: options.nameFile
        // });
        // expect(createTableSpy).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});



    });

    test('server app test with options custom mock values', () => {
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);
        const logMock = jest.fn();
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;
        console.log = logMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith("Server runing...");
        expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent : '1 x 2 = 2',
            destination : options.destinationFile,
            fileName : options.nameFile
        });

    });
});