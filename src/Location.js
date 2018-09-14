import axios from "axios";

export default class Location {
    constructor(ip, url) {
        this.ip = ip;
        this.url = url;
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
        return new Promise(res => {
            this.getData().then(d => res(d));
        }).then(d => {
            if (!arg) {
                console.log(d);
            } else {
                console.log(d[arg]);
            }
        });
    }
}
