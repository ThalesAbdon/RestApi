import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './users/user.repository';
import { User, UserSchema } from '../database/model/user.model';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/admin'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  exports:  [UserRepository],
  providers: [UserRepository],
})
export class RepositoryModule {}
