import { UploadFileUseCase } from "../../domain/useCases/uploadFile";
import { FileRepositorySQLite } from "../../repository/implementation/fileRespositorySqlite";
import { UserRepositorySQLite } from "../../repository/implementation/userRepositorySqlite";
import { UploadFileController } from "./upload.controller";

const userRepository = new UserRepositorySQLite()
const fileRepositorySQLite = new FileRepositorySQLite(userRepository);
const uploadFileUseCase = new UploadFileUseCase(fileRepositorySQLite);
const uploadFileController = new UploadFileController(uploadFileUseCase);

export {
    uploadFileController
}