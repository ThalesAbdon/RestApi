import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/infrastructure/services/user.service';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class SearchUserUseCase implements IUsecase<void, UserEntity[] | void> {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  async execute(): Promise<UserEntity[] | void> {
    await this.userService.get();
  }
}
