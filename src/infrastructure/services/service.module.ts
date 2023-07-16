import { Module } from '@nestjs/common';
import { UserSearchService } from './users/user.service';
import { RepositoryModule } from '../repositories/repository.module';
import { UserPersistenceService } from './users/user.persistence.service';


@Module({
  providers: [UserSearchService,UserPersistenceService],
  exports: [UserSearchService,UserPersistenceService],
  imports: [RepositoryModule]
})
export class ServiceModule {}
