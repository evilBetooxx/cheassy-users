import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../domain/iuser.repository";
import { User } from "../domain/user";

export class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async signup(user: User): Promise<User> {
    const userSaved = await this.prisma.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        photo: user.photo,
        cheeses: user.cheeses,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });

    if (!userSaved) {
      throw new Error("Ocurrió un error al guardar el usuario");
    }

    return new User(
        userSaved.firstName,
        userSaved.lastName,
        userSaved.email,
        userSaved.password,
        userSaved.photo,
        userSaved.cheeses,
        userSaved.createdAt,
        userSaved.updatedAt
      );
  }

  async signin(user: User): Promise<User> {
    const userSaved = await this.prisma.user.findFirst({
      where: {
        email: user.email,
      },
    });

    if (!userSaved) {
      throw new Error("Invalid credentials");
    }

    return new User(
        userSaved.firstName,
        userSaved.lastName,
        userSaved.email,
        userSaved.password,
        userSaved.photo,
        userSaved.cheeses,
        userSaved.createdAt,
        userSaved.updatedAt
      );
  }

  async signout(): Promise<String> {
    return "Finalizaste la sesión";
  }

  async verifyToken(token: string): Promise<String> {
    return "VerifyToken";
  }

  async findByEmail(email: string): Promise<any> {
    const userSaved = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!userSaved) {
      return null;
    }

    return new User(
      userSaved.firstName,
      userSaved.lastName,
      userSaved.email,
      userSaved.password,
      userSaved.photo,
      userSaved.cheeses,
      userSaved.createdAt,
      userSaved.updatedAt
    );
  }
}
