import { Body, Controller,Delete,Inject, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { SearchUserUseCase } from 'src/domain/users/usecases/search.user.usecase';
import { CreateUserDTO } from '../dto/create.user.dto';
import { CreateUserUseCase } from 'src/domain/users/usecases/create.user.usecase';
import { UpdateUserDTO } from '../dto/update.user.dto';
import { UpdateUserUseCase } from 'src/domain/users/usecases/update.user.usecase';
import { DeleteUserUseCase } from 'src/domain/users/usecases/delete.user.usecase';
import { ObjectIdPipe } from 'src/shared/validate.object.id';

@Controller('user')
export class UserPersistenceController {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase,
    @Inject(UpdateUserUseCase)
    private readonly updateUserUseCase: UpdateUserUseCase,
    @Inject(DeleteUserUseCase)
    private readonly deleteUserUseCase: DeleteUserUseCase
  ) {}

  @Post()
  async createUser(@Body()data: CreateUserDTO) {
    await this.createUserUseCase.execute(data)
  }

  @Patch(':userId')
  async updateUser(@Param('userId', new ObjectIdPipe()) userId: string, @Body()data: UpdateUserDTO){
    await this.updateUserUseCase.execute({id: userId,...data})
  }

  @Delete(':userId')
  async deleteUser(@Param('userId', new ObjectIdPipe()) userId: string){
    await this.deleteUserUseCase.execute({id: userId})
  }
}
