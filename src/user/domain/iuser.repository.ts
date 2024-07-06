import { User } from "./user";

export interface IUserRepository {
  signup(user: User): Promise<User>;
  signin(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  // update(user: User): Promise<User>;
}
