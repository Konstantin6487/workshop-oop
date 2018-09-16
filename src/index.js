import axios from 'axios';

export default class Location {
  constructor(_httpClient) {
    this.httpClient = _httpClient || axios;
  }

  url = 'http://ip-api.com/json';

  async getLocationData(ip) {
    const { data } = await this.httpClient.get(`${this.url}/${ip}`);
    if (data.status !== 'success') {
      throw data;
    }
    return data;
  }
}
