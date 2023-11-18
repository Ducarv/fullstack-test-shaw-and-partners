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
exports.UserRepositorySQLite = void 0;
const prisma_1 = require("../../infra/database/prisma/prisma");
class UserRepositorySQLite {
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchTerm = query === null || query === void 0 ? void 0 : query.toString().toLowerCase();
            let searchResults;
            try {
                if (searchTerm) {
                    searchResults = yield prisma_1.prisma.user.findMany({
                        where: {
                            OR: [
                                { name: { contains: searchTerm } },
                                { city: { contains: searchTerm } },
                                { country: { contains: searchTerm } },
                                { favorite_sport: { contains: searchTerm } },
                            ]
                        }
                    });
                }
                else {
                    searchResults = yield prisma_1.prisma.user.findMany();
                }
                return searchResults;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield prisma_1.prisma.user.create({
                    data: user
                });
                return newUser;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
}
exports.UserRepositorySQLite = UserRepositorySQLite;
