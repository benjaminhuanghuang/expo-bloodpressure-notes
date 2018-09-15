import axios from 'axios';
import url from './Url';

axios.defaults.baseURL = url;

class BPRecordApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/api/bprecords`;
  }

  async fetchTodayRecords() {
    try {
      const { data } = await axios.get(this.path);
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
