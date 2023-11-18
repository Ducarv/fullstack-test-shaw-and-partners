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
const upload_controller_1 = require("../upload.controller");
describe('UploadFileController', () => {
    it('should handle file upload successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        };
        const uploadFileController = new upload_controller_1.UploadFileController(mockUseCase);
        const mockRequest = {
            file: {
                id: 1,
                fieldname: 'fieldname',
                originalname: 'originalname',
                encoding: 'encoding',
                mimetype: 'mimetype',
                buffer: Buffer.from('test'),
                size: 1234,
            },
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        yield uploadFileController.handle(mockRequest, mockResponse);
        expect(mockExecute).toHaveBeenCalledWith({
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        });
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'The file was uploaded successfully' });
    }));
    it('should handle missing file during upload', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        };
        const uploadFileController = new upload_controller_1.UploadFileController(mockUseCase);
        const mockRequest = {
            file: undefined,
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        yield uploadFileController.handle(mockRequest, mockResponse);
        expect(mockExecute).not.toHaveBeenCalled();
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'No file uploaded.' });
    }));
});
