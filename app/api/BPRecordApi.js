import axios from 'axios';
import url from './Url';

axios.defaults.baseURL = url;

class BPRecordApi {
  constructor() {
    this.path = `/bprecords`;
  }

  async fetchTodayRecords(args) {
    try {
      const { data } = await axios.post(this.path, { ...args });
      return data.bpRecords;
    } catch (e) {
      throw e;
    }
  }

  async createRecord(args) {
    try {
      const { data }  = await axios.post(`${this.path}/new`, { ...args });
      return data.bpRecord;
    } catch (e) {
      throw e;
    }
  }
}

export default BPRecordApi;
