import axios from 'axios';

export default class Location {
  url = 'http://ip-api.com/json';

  // fn(url, ip) {
  //   axios(`${this.url}/${ip}`).then(resp => resp.data);
  // }

  async fetchData(ip) {
    const respData = await axios(`${this.url}/${ip}`)
      .then(resp => resp.data)

      .then(data => (data.status === 'fail' ? Promise.reject(data) : data));
    return respData;
  }

  getLocationData(ip, field) {
    return this.fetchData(ip)
      .then(respObj => (!field ? respObj : respObj[field]))
      .catch(e => e);
  }
}

const location = new Location();

location.getLocationData('1.2.3.4');
