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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRepositorySQLite = void 0;
const stream_1 = require("stream");
const readline_1 = __importDefault(require("readline"));
const prisma_1 = require("../../infra/database/prisma/prisma");
class FileRepositorySQLite {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    ;
    upload(data) {
        var _a, e_1, _b, _c, _d, e_2, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!data) {
                    throw new Error("Data is missing");
                }
                const savedFile = yield prisma_1.prisma.file.create({
                    data: Object.assign({}, data)
                });
                const { buffer } = savedFile;
                const readbleFile = new stream_1.Readable();
                readbleFile.push(buffer);
                readbleFile.push(null);
                const usersLine = readline_1.default.createInterface({
                    input: readbleFile
                });
                const users = [];
                try {
                    for (var _g = true, usersLine_1 = __asyncValues(usersLine), usersLine_1_1; usersLine_1_1 = yield usersLine_1.next(), _a = usersLine_1_1.done, !_a; _g = true) {
                        _c = usersLine_1_1.value;
                        _g = false;
                        let user = _c;
                        const userLineSplit = user.split(",");
                        users.push({
                            name: userLineSplit[0],
                            city: userLineSplit[1],
                            country: userLineSplit[2],
                            favorite_sport: userLineSplit[3]
                        });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_g && !_a && (_b = usersLine_1.return)) yield _b.call(usersLine_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                try {
                    for (var _h = true, users_1 = __asyncValues(users), users_1_1; users_1_1 = yield users_1.next(), _d = users_1_1.done, !_d; _h = true) {
                        _f = users_1_1.value;
                        _h = false;
                        let { name, city, country, favorite_sport } = _f;
                        yield this.userRepository.create({
                            name,
                            city,
                            country,
                            favorite_sport
                        });
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (!_h && !_d && (_e = users_1.return)) yield _e.call(users_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return savedFile;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        });
    }
}
exports.FileRepositorySQLite = FileRepositorySQLite;
