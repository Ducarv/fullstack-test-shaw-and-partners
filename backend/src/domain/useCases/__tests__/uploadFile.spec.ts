import { FileRepository } from "../../../repository/fileRepository";
import { File } from "../../entities/File";
import { UploadFileUseCase } from "../uploadFile";

describe('UploadFileUseCase', () => {
    it('should upload a file successfully', async () => {
        const mockRepository: FileRepository = {
            upload: async (data: File) => {
                return {
                    id: 1,
                    fieldname: 'fieldname',
                    originalname: 'originalname',
                    encoding: 'encoding',
                    mimetype: 'mimetype',
                    buffer: Buffer.from('test'),
                    size: 1234,
                };
            },
        };

        const uploadFileUseCase = new UploadFileUseCase(mockRepository);
        const data = {
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        };

        const result = await uploadFileUseCase.execute(data);
        expect(result).toEqual({
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        });
    });

    it('should handle errors correctly', async () => {
        const mockRepository: FileRepository = {
            upload: async (data: File) => {
                throw new Error('Failed to upload file');
            },
        };

        const uploadFileUseCase = new UploadFileUseCase(mockRepository);
        const data = {
            id: 1,
            fieldname: 'fieldname',
            originalname: 'originalname',
            encoding: 'encoding',
            mimetype: 'mimetype',
            buffer: Buffer.from('test'),
            size: 1234,
        };

        await expect(uploadFileUseCase.execute(data)).rejects.toThrow('Failed to upload file');
    });
});
