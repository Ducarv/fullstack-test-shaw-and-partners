import { UserRepository } from "../../repository/userRepository";
import { User } from "../entities/User";

export class CreateUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(users: User[]) {
        try {
            const createdUsers = await Promise.all(
                users.map(async (user) => {
                    const { name, city, country, favorite_sport } = user;
                    return await this.userRepository.create({
                        name,
                        city,
                        country,
                        favorite_sport
                    })
                })
            )

            return createdUsers;
        } catch(error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}