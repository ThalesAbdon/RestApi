import { Inject, Injectable } from '@nestjs/common';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';
import { UserPersistenceService } from 'src/infrastructure/services/users/user.persistence.service';

@Injectable()
export class CreateUserUseCase implements IUsecase<UserEntity, void> {
  constructor(@Inject(UserPersistenceService) private readonly userService: UserPersistenceService) {}
  async execute(data: UserEntity): Promise<void> {
    await this.userService.create(data);
  }
}
