import { Inject, Injectable } from '@nestjs/common';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';
import { UserPersistenceService } from 'src/infrastructure/services/users/user.persistence.service';

@Injectable()
export class UpdateUserUseCase implements IUsecase<Partial<UserEntity>, void> {
  constructor(@Inject(UserPersistenceService) private readonly userService: UserPersistenceService) {}
  async execute({id,...data}: Partial<UserEntity>): Promise<void> {
    await this.userService.update(id ,data);
  }
}
