import { QueryType, UserRepository } from "../../repository/userRepository";

export class GetAllUsersUseCase {
    constructor(private repository: UserRepository) {}

    async execute(query?: QueryType) {
        try {
            if (query) {
                const allUsers = await this.repository.getAll();

                const filteredUsers = allUsers?.filter((user) => {
                    return (
                        user.name.toLowerCase().includes(query.toLowerCase()) ||
                        user.city.toLowerCase().includes(query.toLowerCase()) ||
                        user.country.toLowerCase().includes(query.toLowerCase()) ||
                        user.favorite_sport.toLowerCase().includes(query.toLowerCase())
                    );
                });

                return filteredUsers;
            } else {
                const allUsers = await this.repository.getAll();
                return allUsers;
            }
        } catch(error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}