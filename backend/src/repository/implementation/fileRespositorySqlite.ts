import { File } from "../../domain/entities/File";
import { prisma } from "../../infra/database/prisma/prisma";

export class FileRepositorySQLite {
    async upload(data: File) {
        try {
            const savedFile = await prisma.file.create({
                data: data as File
            })
    
            return savedFile;
        } catch(error: unknown) {
            if(error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}