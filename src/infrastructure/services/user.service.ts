import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../database/model/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  async create(data: User) {
    await this.userRepository.create(data);
  }

  async get() {
    return await this.userRepository.get();
  }

  async update(_id: string, data: Partial<User>) {
    await this.userRepository.update(_id, data);
  }
  async delete(_id: string) {
    await this.userRepository.delete(_id);
  }

  async getUser(_id: string) {
    return await this.userRepository.getUser(_id);
  }
}
