import { Module } from '@nestjs/common';
import { UserProvider } from './presentation/users/user.provider.module';


@Module({
  imports: [UserProvider]
})
export class AppModule {}
