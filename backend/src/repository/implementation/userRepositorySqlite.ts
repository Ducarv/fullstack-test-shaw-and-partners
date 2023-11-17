import { prisma } from "../../infra/database/prisma/prisma";
import { QueryType } from "../userRepository";

export class UserRepositorySQLite {
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
}