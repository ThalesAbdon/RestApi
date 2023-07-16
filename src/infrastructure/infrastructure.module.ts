import { Module } from '@nestjs/common';
import { UserSearchService } from './services/users/user.service';
import { UserRepository } from './repositories/users/user.repository';
import { ServiceModule } from './services/service.module';


@Module({
  imports: [ServiceModule],
  exports: [ServiceModule],
})
export class InfrastructureModule {}
