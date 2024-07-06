import { Request, Response, NextFunction } from "express";

export interface IJsonWebTokenRepository {
  signToken(payload: any): Promise<String>;
  // verifyToken(req: Request, res: Response, next: NextFunction): Promise<String>;
}
