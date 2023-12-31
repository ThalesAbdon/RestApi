import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../../database/model/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create(data: User) {
    const userData = await this.userModel.create(data);
    userData.save();
  }

  async get() {
    return await this.userModel.find();
  }

  async update(_id: string, data: Partial<User>) {
    await this.userModel.updateOne({ _id }, {$set: {...data}});
  }
  async delete(_id: string) {
    await this.userModel.deleteOne({ _id });
  }

  async getUser(_id: string) {
    return await this.userModel.findOne({ _id });
  }
}
