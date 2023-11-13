import { ChatsApi, IAddUsers, ICreateChat, IDeleteChat } from '../api/ChatsApi';
import { store } from '../utils/Store';
// import { store } from '../utils/Store';

class ChatsController {
  private api = new ChatsApi();

  async createChat(data: ICreateChat) {
    try {
      await this.api.createChat(data);
      this.getChats();
      // add
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(data: IDeleteChat) {
    try {
      await this.api.deleteChat(data);
      await this.getChats();
    } catch (error) {
      console.log(error);
    }
  }

  async getChats() {
    try {
      const chats = await this.api.getChats();
      store.set('chats', chats);
      // add
    } catch (error) {
      console.log(error);
    }
  }

  async addUsers(data: IAddUsers) {
    try {
      await this.api.addUsers(data);
      const { chatId } = data;
      const userList = this.api.getUser(chatId);
      console.log(userList);
      // add
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUsers(data: IAddUsers) {
    try {
      await this.api.deleteUsers(data);
      const { chatId } = data;
      const userList = this.api.getUser(chatId);

      console.log(userList);
      // add
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatsController();
