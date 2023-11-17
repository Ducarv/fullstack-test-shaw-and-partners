import { UploadFileUseCase } from "../../domain/useCases/uploadFile";
import { FileRepositorySQLite } from "../../repository/implementation/fileRespositorySqlite";
import { UploadFileController } from "./upload.controller";

const fileRepositorySQLite = new FileRepositorySQLite();
const uploadFileUseCase = new UploadFileUseCase(fileRepositorySQLite);
const uploadFileController = new UploadFileController(uploadFileUseCase);

export {
    uploadFileController
}