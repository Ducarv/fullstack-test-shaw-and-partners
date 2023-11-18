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
            if(error instanceof Error) {
                response.status(500).json(error.message);
            }
        }
    }
}