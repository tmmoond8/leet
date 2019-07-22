import jwt from 'jsonwebtoken';
import userManager from './dataManager/UserManager';
import { User } from './types/graph';

export const createJWT = (id: number): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_TOKEN || ""
  );
  return token;
};


export const decodeJWT = (token: string): User | undefined => {
  const decoded: any = jwt.verify(token, process.env.JWT_TOKEN || "");
  const { id } = decoded;
  const user = userManager.getUser(id);
  return user;
}