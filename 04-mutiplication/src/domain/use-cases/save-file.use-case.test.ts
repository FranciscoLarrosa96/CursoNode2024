import { SaveFile } from "./save-file.use-case";
import fs from 'fs';
describe('SaveFileUseCase', () => {

    // afterEach(() => {
    //     const outputFolderExist = fs.existsSync('outputs');
    //     if (outputFolderExist) {
    //         fs.rmSync('outputs', { recursive: true });
    //     }
    // });

    test('Should save file with default values', () => {
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        }
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });

    test('Should save file with custom values', () => {
        const options = {
            fileContent: 'custom content',
            fileDestination: 'custom-outputs',
            fileName: 'custom-table-name'
        }
        const saveFile = new SaveFile();
        const filePath = `${options.fileDestination}/${options.fileName}.txt`;
        const result = saveFile.execute(options);
        const fileExist = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });

    test('Should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        // Cuando uso mockImplementation reescribo la funcion de dicha funcion
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('this is a custom error message') }
        );
        const result = saveFile.execute({ fileContent: '' });
        expect(result).toBe(false);

        mkdirSpy.mockRestore();
    });
    test('Should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        // Cuando uso mockImplementation reescribo la funcion de dicha funcion
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('this is a custom error message of WRITE') }
        );
        const result = saveFile.execute({ fileContent: '' });
        expect(result).toBe(false);
        writeFileSpy.mockRestore();
    });
});