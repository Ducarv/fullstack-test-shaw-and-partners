import { QueryType, UserRepository } from "../../../repository/userRepository";
import { GetAllUsersUseCase } from "../getAllUsers";

describe('GetAllUsers', () => {
    it('should get all users correctly without query', async () => {
      const mockRepository: Pick<UserRepository, 'getAll'> = {
        getAll: async () => [
          {
            name: 'user 1',
            city: 'Rio de Janeiro',
            country: 'Brazil',
            favorite_sport: 'soccer',
          },
          {
            name: 'user 2',
            city: 'Berlin',
            country: 'German',
            favorite_sport: 'soccer',
          },
        ],
      };
  
      const getAllUsers = new GetAllUsersUseCase(mockRepository as UserRepository);
      const result = await getAllUsers.execute();
  
      if (result) {
        expect(result.length).toBeGreaterThanOrEqual(1);
        expect(result[0].name).toBe('user 1');
      } else {
        fail('Result is undefined');
      }
    });

    it('should get all users correctly with query', async () => {
        const mockRepository: Pick<UserRepository, 'getAll'> = {
            getAll: async (q: QueryType) => [
              {
                name: 'user 1',
                city: 'Rio de Janeiro',
                country: 'Brazil',
                favorite_sport: 'soccer',
              },
              {
                name: 'user 2',
                city: 'Berlin',
                country: 'German',
                favorite_sport: 'soccer',
              },
            ],
        };

        const getAllUsersByQuery = new GetAllUsersUseCase(mockRepository as UserRepository);
        const query = "Berlin"
        const result = await getAllUsersByQuery.execute(query);

        if(result) {
            expect(result).toHaveLength(1); 
            expect(result[0].name).toBe('user 2');
        }
    })
  
    it('should handle errors correctly', async () => {
      const mockRepository: Pick<UserRepository, 'getAll'> = {
        getAll: async () => {
          throw new Error('Simulated error');
        },
      };
  
      const listAllTutors = new GetAllUsersUseCase(mockRepository as UserRepository);
  
      await expect(listAllTutors.execute()).rejects.toThrow('Simulated error');
    });
  });
  