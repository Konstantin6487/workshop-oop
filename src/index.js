import axios from 'axios';

export default class Location {
  constructor(ip) {
    this.ip = ip;
    this.url = 'http://ip-api.com/json';
  }

  async getData() {
    const respData = await axios(`${this.url}/${this.ip}`)
      .then(resp => resp.data)
      .then(data => (data.status === 'fail' ? Promise.reject(data) : data));
    return respData;
  }

  selectData(field) {
    return this.getData()
      .then(respObj => (!field ? respObj : respObj[field]))
      .catch(e => e);
  }

  showData(field) {
    return this.selectData(field).then(d => console.log(d));
  }
}
