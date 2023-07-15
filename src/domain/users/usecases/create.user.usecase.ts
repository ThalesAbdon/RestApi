import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/infrastructure/services/user.service';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class CreateUserUseCase implements IUsecase<UserEntity, void> {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async execute(data: UserEntity): Promise<void> {
    await this.userService.create(data);
  }
}
