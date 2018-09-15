import axios from 'axios';

export default class Location {
  url = 'http://ip-api.com/json';

  fetchData(ip) {
    return axios(`${this.url}/${ip}`);
  }

  async getLocationData(ip, client) {
    const httpClient = client ? Promise.resolve(client) : this.fetchData(ip);
    const result = await httpClient.then(d => d.data).catch(e => e);
    return result;
  }
}
