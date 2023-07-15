import { Module } from '@nestjs/common';
import { UserProvider } from './presentation/controllers/users/user.provider.module';

@Module({
  providers: [UserProvider],
})
export class AppModule {}
