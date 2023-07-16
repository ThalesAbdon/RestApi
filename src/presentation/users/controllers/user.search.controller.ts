import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { GetUserByIdUseCase } from 'src/domain/users/usecases/get.user.by.id.usecase';
import { SearchUserUseCase } from 'src/domain/users/usecases/search.user.usecase';
import { ObjectIdPipe } from 'src/shared/validate.object.id';

@Controller('user')
export class UserSearchController {
  constructor(
    @Inject(SearchUserUseCase)
    private readonly searchUserUsecase: SearchUserUseCase,
    @Inject(GetUserByIdUseCase)
    private readonly getUserByIdUseCase: GetUserByIdUseCase
  ) {}

  @Get()
  async getUsers() {
    return await this.searchUserUsecase.execute();
    
  }

  @Get(':userId')
  async deleteUser(@Param('userId', new ObjectIdPipe()) userId: string){
  return await this.getUserByIdUseCase.execute({id: userId})
  }
}
