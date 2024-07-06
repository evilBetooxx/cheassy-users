import { Request, Response, NextFunction } from "express";
import { IJsonWebTokenRepository } from "../../application/services/ijwt.repository";
import jwt from "jsonwebtoken";

export class JsonWebTokenUtility implements IJsonWebTokenRepository {
  async signToken(payload: any): Promise<string> {
    return jwt.sign(payload, process.env.TOKEN_SECRET || "");
  }

  async verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "No estás autorizado" });

    jwt.verify(token, process.env.TOKEN_SECRET || '', (err: any, user: any) => {
      if (err) return res.status(401).json({ message: "No estás autorizado" });
      user = user;
      console.log(user);
      next();
    });
  }
}