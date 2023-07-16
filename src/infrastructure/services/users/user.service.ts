import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/users/user.repository';
import { User } from '../../database/model/user.model';
import { UserEntity } from 'src/domain/users/entity/user.entity';

@Injectable()
export class UserSearchService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}


  async get() {
     const usersList = await this.userRepository.get();
     return usersList.map(user => new UserEntity(user))
  }

  async getUser(_id: string) {
    return await this.userRepository.getUser(_id);
  }
}
