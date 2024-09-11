import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('02-factory', () => {
    const getUuid = () => '1234';
    const getAge = () => 28;
    test('makePerson Should return a person', () => {
        const makePerson = buildMakePerson({ getUuid, getAge });
        const fran = makePerson({ name: 'Francisco', birthdate: '1996-05-10' });
        expect(fran).toEqual({
            id: '1234',
            name: 'Francisco',
            birthdate: '1996-05-10',
            age: 28
        });
    });
});