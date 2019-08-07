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

export const arrayShuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}