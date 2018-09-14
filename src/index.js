import axios from "axios";

export default class Location {
  constructor(ip) {
    this.ip = ip;
    this.url = "http://ip-api.com/json";
  }

  async getData() {
    try {
      const response = await axios(`${this.url}/${this.ip}`);
      const respData = await response.data;
      return respData;
    } catch (e) {
      console.log(e.message);
    }
  }

  showData(arg) {
    return this.getData().then(d => {
      if (!arg) {
        console.log(d);
      } else {
        console.log(d[arg]);
      }
    });
  }
}
