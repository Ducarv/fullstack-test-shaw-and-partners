import { QueryType, UserRepository } from "../../repository/userRepository";

export class GetAllUsersUseCase {
    constructor(private repository: UserRepository) {}

    async execute(query?: QueryType) {
        try {
            const users = await this.repository.getAll(query);
            return users;
        } catch(error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}