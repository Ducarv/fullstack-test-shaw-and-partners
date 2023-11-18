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
const getAll_controller_1 = require("../getAll.controller");
describe('GetAllUsersController', () => {
    it('should handle request without query parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        };
        const getAllUsersController = new getAll_controller_1.GetAllUsersController(mockUseCase);
        const mockRequest = {
            query: undefined,
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        yield getAllUsersController.handle(mockRequest, mockResponse);
        expect(mockExecute).toHaveBeenCalledWith();
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    it('should handle request with query parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        };
        const getAllUsersController = new getAll_controller_1.GetAllUsersController(mockUseCase);
        const mockRequest = {
            query: { q: 'Berlin' },
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        yield getAllUsersController.handle(mockRequest, mockResponse);
        expect(mockExecute).toHaveBeenCalledWith('Berlin');
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled();
    }));
    it('should handle errors correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExecute = jest.fn(() => {
            throw new Error('Simulated error');
        });
        const mockUseCase = {
            execute: mockExecute,
        };
        const getAllUsersController = new getAll_controller_1.GetAllUsersController(mockUseCase);
        const mockRequest = {
            query: {},
        };
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        yield getAllUsersController.handle(mockRequest, mockResponse);
        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith('Simulated error');
    }));
});
