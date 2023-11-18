"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("User interface", () => {
    it('should match the User interface structure', () => {
        const user = {
            name: "example1",
            city: "New York",
            country: "USA",
            favorite_sport: "Soccer",
        };
        expect(user).toHaveProperty("name");
        expect(user).toHaveProperty("city");
        expect(user).toHaveProperty("country");
        expect(user).toHaveProperty("favorite_sport");
        expect(typeof user.name).toBe('string');
        expect(typeof user.city).toBe('string');
        expect(typeof user.country).toBe('string');
        expect(typeof user.favorite_sport).toBe('string');
    });
    it('should throw an error if the file structure is incorrect', () => {
        const invalidUser = {
            name: "example1",
            city: "New York",
            favorite_sport: "Soccer",
        };
        function validateUserStructure() {
            if (!invalidUser.country) {
                throw new Error('User structure  is incorrect!');
            }
        }
        expect(validateUserStructure).toThrow('User structure  is incorrect!');
    });
});
