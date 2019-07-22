import {
  User
} from '../../types/graph';

class UserData {
  private userMap: {} = {};

  public constructor() {
    console.log('new UserData');
  }

  public addUser(user: User) {
    this.userMap[user.id] = user;
  }

  public getUser(userId: number) {
    return this.userMap[userId];
  }
}

export default new UserData();