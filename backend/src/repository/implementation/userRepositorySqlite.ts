import { User } from "../../domain/entities/User";
import { prisma } from "../../infra/database/prisma/prisma";
import { QueryType, UserRepository } from "../userRepository";

export class UserRepositorySQLite implements UserRepository {
    async getAll(query: QueryType) {
        const searchTerm = query?.toString().toLowerCase();
        let searchResults;
        try {
            if(searchTerm) {
                searchResults = await prisma.user.findMany({
                    where: {
                        OR: [
                            { name: { contains: searchTerm } },
                            { city: { contains: searchTerm } },
                            { country: { contains: searchTerm } },
                            { favorite_sport: { contains: searchTerm } },
                        ]
                    }
                })
            } else {
                searchResults = await prisma.user.findMany();
            }

            return searchResults;
        } catch(error: unknown) {
            if(error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }

    async create(user: User) {
        try {
            const newUser = await prisma.user.create({
                data: user
            })

            return newUser;
        } catch(error: unknown) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}