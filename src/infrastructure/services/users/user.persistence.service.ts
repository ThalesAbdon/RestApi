import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/users/user.repository';
import { User } from '../../database/model/user.model';
import { UserEntity } from 'src/domain/users/entity/user.entity';

@Injectable()
export class UserPersistenceService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async create(data: User) {
    await this.userRepository.create(data);
  }

  async update(_id: string, data: Partial<User>) {
    await this.userRepository.update(_id, data);
  }
  async delete(_id: string) {
    await this.userRepository.delete(_id);
  }

}
