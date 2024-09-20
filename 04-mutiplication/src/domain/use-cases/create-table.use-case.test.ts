import { CreateTable } from "./create-table.use-case";


describe('CreateTableUseCase', () => {

    test('Should create table with default values', () => {
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 22 });
        const rows = table.split('\n').length;
        console.log("🚀 ~ test ~ table:", table)
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('22 x 1 = 22');
        expect(table).toContain('22 x 10 = 220');
        expect(rows).toBe(10);
    });

    test('Should create table with custom values', () => {
        const options = {
            base: 99,
            limit: 9
        }
        const createTable = new CreateTable();
        const table = createTable.execute(options);
        expect(table).toContain('99 x 1 = 99');
        expect(table).toContain('99 x 9 = 891');
        const rows = table.split('\n').length;
        expect(rows).toBe(9);
    });


});