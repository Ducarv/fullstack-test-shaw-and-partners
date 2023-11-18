"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUsers_1 = require("../getAllUsers");
describe('GetAllUsers', () => {
    it('should get all users correctly without query', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRepository = {
            getAll: () => __awaiter(void 0, void 0, void 0, function* () {
                return [
                    {
                        name: 'user 1',
                        city: 'Rio de Janeiro',
                        country: 'Brazil',
                        favorite_sport: 'soccer',
                    },
                    {
                        name: 'user 2',
                        city: 'Berlin',
                        country: 'German',
                        favorite_sport: 'soccer',
                    },
                ];
            }),
        };
        const getAllUsers = new getAllUsers_1.GetAllUsersUseCase(mockRepository);
        const result = yield getAllUsers.execute();
        if (result) {
            expect(result.length).toBeGreaterThanOrEqual(1);
            expect(result[0].name).toBe('user 1');
        }
        else {
            fail('Result is undefined');
        }
    }));
    it('should get all users correctly with query', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRepository = {
            getAll: (q) => __awaiter(void 0, void 0, void 0, function* () {
                return [
                    {
                        name: 'user 1',
                        city: 'Rio de Janeiro',
                        country: 'Brazil',
                        favorite_sport: 'soccer',
                    },
                    {
                        name: 'user 2',
                        city: 'Berlin',
                        country: 'German',
                        favorite_sport: 'soccer',
                    },
                ];
            }),
        };
        const getAllUsersByQuery = new getAllUsers_1.GetAllUsersUseCase(mockRepository);
        const query = "Berlin";
        const result = yield getAllUsersByQuery.execute(query);
        if (result) {
            expect(result).toHaveLength(1);
            expect(result[0].name).toBe('user 2');
        }
    }));
    it('should handle errors correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRepository = {
            getAll: () => __awaiter(void 0, void 0, void 0, function* () {
                throw new Error('Simulated error');
            }),
        };
        const listAllTutors = new getAllUsers_1.GetAllUsersUseCase(mockRepository);
        yield expect(listAllTutors.execute()).rejects.toThrow('Simulated error');
    }));
});
