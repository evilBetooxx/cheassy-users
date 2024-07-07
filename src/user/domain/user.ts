export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public photo: string,
    public cheeses: string[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
