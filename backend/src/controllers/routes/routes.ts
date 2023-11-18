import { Request, Response, Router } from "express";
import { uploadFileController } from "../files";
import { multerConfig } from "../../providers/multer";

export const router = Router();

router.post('/api/files', multerConfig.single('file'), async (request: Request, response: Response) => {
   await uploadFileController.handle(request, response); 
})
