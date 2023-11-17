import { FileRepository } from "../../repository/fileRepository";
import { File } from "../entities/File";

export class UploadFileUseCase {
    constructor(private repository: FileRepository) {};

    async execute(data: File) {
        try {
            const uploadedFile = await this.repository.upload(data);
            return uploadedFile;
        } catch(error: unknown) {
            if(error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}