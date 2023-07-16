import { Module } from '@nestjs/common';
import { UserSearchController } from './controllers/user.search.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { SearchUserUseCase } from 'src/domain/users/usecases/search.user.usecase';
import { UserPersistenceController } from './controllers/user.persistence.controller';
import { CreateUserUseCase } from 'src/domain/users/usecases/create.user.usecase';
import { UpdateUserUseCase } from 'src/domain/users/usecases/update.user.usecase';
import { DeleteUserUseCase } from 'src/domain/users/usecases/delete.user.usecase';
import { GetUserByIdUseCase } from 'src/domain/users/usecases/get.user.by.id.usecase';

@Module({
  controllers: [UserSearchController,UserPersistenceController],
  imports: [InfrastructureModule],
  providers: [SearchUserUseCase,GetUserByIdUseCase,CreateUserUseCase,UpdateUserUseCase,DeleteUserUseCase]
})
export class UserProvider {}
