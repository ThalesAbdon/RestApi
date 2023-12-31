import { Inject, Injectable } from '@nestjs/common';

import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';
import { UserSearchService } from 'src/infrastructure/services/users/user.service';

@Injectable()
export class SearchUserUseCase implements IUsecase<void, UserEntity[] | void> {
  constructor(@Inject(UserSearchService) private readonly userService: UserSearchService) {}
  async execute(): Promise<UserEntity[] | void> {
    return await this.userService.get();
  }
}
