import { Request, Response, Router } from "express";
import { uploadFileController } from "../files";
import { multerConfig } from "../../providers/multer";
import { getAllUsersController } from "../users";

export const router = Router();

router.post('/api/files', multerConfig.single('file'), async (request: Request, response: Response) => {
   await uploadFileController.handle(request, response); 
})

router.get('/api/users', async (request: Request, response: Response) => {
   await getAllUsersController.handle(request, response);
})
