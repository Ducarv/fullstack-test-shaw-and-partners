import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../domain/useCases/getAllUsers";

export class GetAllUsersController {
    constructor(private getAllUseCase: GetAllUsersUseCase) {};

    async handle(request: Request, response: Response) {
        const { q } = request.query;

        try {
            if(q) {
                const usersSearched = await this.getAllUseCase.execute(q as string);
                response.status(200).json(usersSearched);
            } else {
                const users = await this.getAllUseCase.execute();
                response.status(200).json(users)
            }
        } catch(error: unknown) {
            response.status(404).json({ error: "Cannot get all users." })
        }
    }
}