import { Request, Response } from "express";
import { UploadFileUseCase } from "../../domain/useCases/uploadFile";
import { File } from "../../domain/entities/File";

export class UploadFileController {
    constructor(private uploadFileUseCase: UploadFileUseCase) {}

    async handle(request: Request, response: Response) {
        const file = request.file;

        if (!file) {
            return response.status(400).json({ message: "No file uploaded." });
        }

        try {
            await this.uploadFileUseCase.execute(file);
            response.status(200).json({ message: "The file was uploaded successfully"});
        } catch(error: unknown) {
            if(error instanceof Error) {
                response.status(500).json(error.message);
            }
        }
    }
}