import { IUserRepository } from "../../domain/iuser.repository";
import { Response } from "express";

export class signOut {
  constructor(private userRepository: IUserRepository) {}

  async run(res: Response): Promise<String> {
    res.cookie("token", "", { expires: new Date(0) });
    return await this.userRepository.signout();
  }
}
