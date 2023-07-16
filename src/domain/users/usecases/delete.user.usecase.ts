import { Inject, Injectable } from '@nestjs/common';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';
import { UserPersistenceService } from 'src/infrastructure/services/users/user.persistence.service';

@Injectable()
export class DeleteUserUseCase implements IUsecase<Pick<UserEntity, 'id'>, void> {
  constructor(@Inject(UserPersistenceService) private readonly userService: UserPersistenceService) {}
  async execute({id}: Pick<UserEntity, 'id'>): Promise<void> {
    await this.userService.delete(id);
  }
}
