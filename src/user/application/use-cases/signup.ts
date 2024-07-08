import { IUserRepository } from "../../domain/iuser.repository";
import { IBcryptRepository } from "../services/ibycript.repository";
import { User } from "../../domain/user";

export class signUp {
  constructor(
    private userRepository: IUserRepository,
    private bycriptRepository: IBcryptRepository
  ) {}

  async run(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<User> {
    const userFound = await this.userRepository.findByEmail(email);

    if (userFound) {
      throw new Error("Ese correo ya está en uso");
    }

    const hashedPassword = await this.bycriptRepository.hashPassword(password);
    const photo = "https://res.cloudinary.com/dn1ng7anm/image/upload/v1720400784/ranchero_c7ttku.png";

    const user = new User(
      "",
      firstName,
      lastName,
      email,
      hashedPassword,
      photo,
      [],
    );
    return this.userRepository.signup(user);
  }
}
