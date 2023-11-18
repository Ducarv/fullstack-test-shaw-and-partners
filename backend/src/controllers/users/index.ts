import { GetAllUsersUseCase } from "../../domain/useCases/getAllUsers";
import { UserRepositorySQLite } from "../../repository/implementation/userRepositorySqlite";
import { GetAllUsersController } from "./getAll.controller";

const userRepository = new UserRepositorySQLite();
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export {
    getAllUsersController
}