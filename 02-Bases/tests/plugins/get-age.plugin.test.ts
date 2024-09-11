import { getAge } from "../../src/plugins";


describe('GetAgePlugin', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '2000-01-01';
        const age = getAge(birthdate);
        expect(age).toBe(25);
    });

    test('getAge should return current age', () => {
        const birthdate = '2000-01-01';
        const age = getAge(birthdate);
        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculateAge);
    });

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(3000);
        const birthdate = '2000-01-01';
        const age = getAge(birthdate);
        expect(age).toBe(0);

    });
});