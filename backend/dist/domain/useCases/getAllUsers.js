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
exports.GetAllUsersUseCase = void 0;
class GetAllUsersUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (query) {
                    const allUsers = yield this.repository.getAll();
                    const filteredUsers = allUsers === null || allUsers === void 0 ? void 0 : allUsers.filter((user) => {
                        return (user.name.toLowerCase().includes(query.toLowerCase()) ||
                            user.city.toLowerCase().includes(query.toLowerCase()) ||
                            user.country.toLowerCase().includes(query.toLowerCase()) ||
                            user.favorite_sport.toLowerCase().includes(query.toLowerCase()));
                    });
                    return filteredUsers;
                }
                else {
                    const allUsers = yield this.repository.getAll();
                    return allUsers;
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;
