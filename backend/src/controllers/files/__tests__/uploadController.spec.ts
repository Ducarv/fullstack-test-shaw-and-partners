import { UploadFileUseCase } from "../../../domain/useCases/uploadFile";
import { UploadFileController } from "../upload.controller";


describe('UploadFileController', () => {
    it('should handle file upload successfully', async () => {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        } as unknown as UploadFileUseCase;

        const uploadFileController = new UploadFileController(mockUseCase);

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

        await uploadFileController.handle(mockRequest as any, mockResponse as any);

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
    });

    it('should handle missing file during upload', async () => {
        const mockExecute = jest.fn();
        const mockUseCase = {
            execute: mockExecute,
        } as unknown as UploadFileUseCase; 

        const uploadFileController = new UploadFileController(mockUseCase);

        const mockRequest = {
            file: undefined,
        };

        const mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await uploadFileController.handle(mockRequest as any, mockResponse as any);

        expect(mockExecute).not.toHaveBeenCalled(); 
        expect(mockResponse.status).toHaveBeenCalledWith(400);
        expect(mockResponse.json).toHaveBeenCalledWith({ message: 'No file uploaded.' }); 
    });
});
