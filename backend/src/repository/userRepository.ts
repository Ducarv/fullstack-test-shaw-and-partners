import { User } from "../domain/entities/User";

export type QueryType = string | undefined;

export interface UserRepository {
    getAll: (query?: QueryType) => Promise<User[] | undefined>;
    create: (users: User) => Promise<User | undefined>;
}