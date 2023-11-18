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
exports.router = void 0;
const express_1 = require("express");
const files_1 = require("../files");
const multer_1 = require("../../providers/multer");
const users_1 = require("../users");
exports.router = (0, express_1.Router)();
exports.router.post('/api/files', multer_1.multerConfig.single('file'), (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield files_1.uploadFileController.handle(request, response);
}));
exports.router.get('/api/users', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    yield users_1.getAllUsersController.handle(request, response);
}));
