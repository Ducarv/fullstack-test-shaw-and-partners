import { Request, Response } from "express";
import { UploadFileUseCase } from "../../domain/useCases/uploadFile";

export class UploadFileController {
    constructor(private uploadFileUseCase: UploadFileUseCase) {}

    async handle(request: Request, response: Response) {
        const { file } = request.body;

        try {
            const uploadedFile = await this.uploadFileUseCase.execute(file);
            response.status(201).json(uploadedFile);
        } catch(error: unknown) {
            response.status(400).json(error);
        }
    }
}