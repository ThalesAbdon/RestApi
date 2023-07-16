export class UserEntity {
  id?: string;
  name: string;
  email: string;
  password: string;
  constructor(data: UserEntity) {
    this.id = data.id
    this.name = data.name,
    this.email = data.email,
    this.password = data.password
  }
}
