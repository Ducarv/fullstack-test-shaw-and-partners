"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileController = void 0;
class UploadFileController {
    constructor(uploadFileUseCase) {
        this.uploadFileUseCase = uploadFileUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = request.file;
            if (!file) {
                return response.status(400).json({ message: "No file uploaded." });
            }
            try {
                yield this.uploadFileUseCase.execute(file);
                response.status(200).json({ message: "The file was uploaded successfully" });
            }
            catch (error) {
                if (error instanceof Error) {
                    response.status(500).json(error.message);
                }
            }
        });
    }
}
exports.UploadFileController = UploadFileController;
