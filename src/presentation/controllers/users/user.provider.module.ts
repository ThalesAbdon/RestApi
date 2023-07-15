import { Module } from '@nestjs/common';
import { UserSearchController } from './user.search.controller';
import { UserService } from 'src/infrastructure/services/user.service';
import { UserRepository } from 'src/infrastructure/repositories/user.repository';
import { SearchUserUseCase } from 'src/domain/users/usecases/search.user.usecase';

@Module({
  controllers: [UserSearchController],
  providers: [UserService, UserRepository, SearchUserUseCase],
})
export class UserProvider {}
