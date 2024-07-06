export class User {
  constructor(
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
