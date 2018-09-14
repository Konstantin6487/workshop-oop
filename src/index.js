import Location from "./Location";

const url = "http://ip-api.com/json";
const ip = "134.234.3.2";

const location = new Location(ip, url);

location.showData();
location.showData("country");
