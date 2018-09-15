import axios from 'axios';
import url from './Url';

axios.defaults.baseURL = url;

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }
}
export default UserApi;