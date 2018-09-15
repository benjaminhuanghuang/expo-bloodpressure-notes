import axios from 'axios';
import url from './Url';

axios.defaults.baseURL = url;

class BPRecordApi {
  constructor() {
    this.path = `/api/bprecords`;
  }

  async fetchTodayRecords(args) {
    try {
      const { data } = await axios.post(this.path, { ...args });
      return data.meetups;
    } catch (e) {
      throw e;
    }
  }

  async createRecords(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}

export default BPRecordApi;
