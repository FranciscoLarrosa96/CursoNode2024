import { getUuid } from "../../src/plugins";

describe('Getuuid', () => {
    test('get uuid should return a UUID', () => {
        const uuid = getUuid();
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    });
});