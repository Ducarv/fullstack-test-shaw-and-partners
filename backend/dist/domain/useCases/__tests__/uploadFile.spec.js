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
const uploadFile_1 = require("../uploadFile");
describe('UploadFileUseCase', () => {
    it('should upload a file successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRepository = {
            upload: (data) => __awaiter(void 0, void 0, void 0, function* () {
                return {
                    id: 1,
                    fieldname: 'fieldname',
                    originalname: 'originalname',
                    encoding: 'encoding',
                    mimetype: 'mimetype',
                    buffer: Buffer.from('test'),
                    size: 1234,
                };
            }),
        };
        const uploadFileUseCase = new uploadFile_1.UploadFileUseCase(mockRepository);
        const data = {
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        };
        const result = yield uploadFileUseCase.execute(data);
        expect(result).toEqual({
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        });
    }));
    it('should handle errors correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRepository = {
            upload: (data) => __awaiter(void 0, void 0, void 0, function* () {
                throw new Error('Failed to upload file');
            }),
        };
        const uploadFileUseCase = new uploadFile_1.UploadFileUseCase(mockRepository);
        const data = {
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        };
        yield expect(uploadFileUseCase.execute(data)).rejects.toThrow('Failed to upload file');
    }));
});
