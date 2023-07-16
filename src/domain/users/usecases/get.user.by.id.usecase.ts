import { Inject, Injectable } from '@nestjs/common';
import { IUsecase } from 'src/shared/usecase.interface';
import { UserEntity } from '../entity/user.entity';
import { UserSearchService } from 'src/infrastructure/services/users/user.service';


@Injectable()
export class GetUserByIdUseCase implements IUsecase<Pick<UserEntity, 'id'>, UserEntity |void> {
  constructor(@Inject(UserSearchService) private readonly userService: UserSearchService) {}
  async execute({id}: Pick<UserEntity, 'id'>): Promise<UserEntity | void> {
   return await this.userService.getUser(id);
  }
}
