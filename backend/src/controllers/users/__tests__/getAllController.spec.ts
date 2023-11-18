import { GetAllUsersUseCase } from "../../../domain/useCases/getAllUsers";
import { GetAllUsersController } from "../getAll.controller";

describe('GetAllUsersController', () => {
    it('should handle request without query parameter', async () => {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        } as unknown as GetAllUsersUseCase;
    
        const getAllUsersController = new GetAllUsersController(mockUseCase);
    
        const mockRequest = {
            query: undefined,
        };
    
        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    
        await getAllUsersController.handle(mockRequest as any, mockResponse as any);
    
        expect(mockExecute).toHaveBeenCalledWith();
        expect(mockResponse.status).toHaveBeenCalledWith(200); 
        expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should handle request with query parameter', async () => {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        } as unknown as GetAllUsersUseCase; 

        const getAllUsersController = new GetAllUsersController(mockUseCase);

        const mockRequest = {
            query: { q: 'Berlin' },
        };

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getAllUsersController.handle(mockRequest as any, mockResponse as any);

        expect(mockExecute).toHaveBeenCalledWith('Berlin'); 
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalled(); 
    });

    it('should handle errors correctly', async () => {
        const mockExecute = jest.fn(() => {
            throw new Error('Simulated error');
        }); 
        const mockUseCase = {
            execute: mockExecute,
        } as unknown as GetAllUsersUseCase; 

        const getAllUsersController = new GetAllUsersController(mockUseCase);

        const mockRequest = {
            query: {},
        }; 

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getAllUsersController.handle(mockRequest as any, mockResponse as any);

        expect(mockResponse.status).toHaveBeenCalledWith(500); 
        expect(mockResponse.json).toHaveBeenCalledWith('Simulated error');
    });
});
