export class UserEntity {
  name: string;
  email: string;
  password: string;
  constructor(data: UserEntity) {
    Object.assign(this, data);
  }
}
