import axios from 'axios';

export default class Location {
  constructor(_httpClient) {
    this.httpClient = _httpClient || axios;
  }

  url = 'http://ip-api.com/json';

  async fetchData(ip) {
    const respData = await this.httpClient
      .get(`${this.url}/${ip}`)
      .then(d => d.data)
      .catch(e => Error(e));
    return respData;
  }

  getLocationData(ip) {
    return this.fetchData(ip);
  }
}
