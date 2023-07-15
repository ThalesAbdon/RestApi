import { Controller, Get, Inject } from '@nestjs/common';
import { SearchUserUseCase } from 'src/domain/users/usecases/search.user.usecase';

@Controller('user')
export class UserSearchController {
  constructor(
    @Inject(SearchUserUseCase)
    private readonly searchUserUsecase: SearchUserUseCase,
  ) {}

  @Get()
  async getUsers() {
    return this.searchUserUsecase.execute();
  }
}
