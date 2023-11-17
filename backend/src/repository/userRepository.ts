import { User } from "../domain/entities/User";

type Query = string | undefined;

export interface UserRepository {
    getAll: (query: Query) => Promise<User[] | undefined>
}