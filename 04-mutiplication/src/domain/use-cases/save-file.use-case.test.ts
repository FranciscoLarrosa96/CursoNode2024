import { SaveFile } from "./save-file.use-case";
import fs from 'fs';
describe('SaveFileUseCase', () => {

    beforeEach(() => {
        // clean up
        fs.rmSync('outputs', { recursive: true });
    });

    afterEach(() => {
        fs.rmSync('outputs', { recursive: true });
    });

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
});