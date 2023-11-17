import { File } from "../domain/entities/File";

export interface FileRepository {
    upload: (data: File) => Promise<File | string | undefined>
};
