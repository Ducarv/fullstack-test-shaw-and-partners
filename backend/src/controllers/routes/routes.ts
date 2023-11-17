import { Request, Response, Router } from "express";
import { uploadFileController } from "../files";

export const router = Router();

router.post('/api/files', async (request: Request, response: Response) => {
    await uploadFileController.handle(request, response); 
})
