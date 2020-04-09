import axios from "axios";

export default axios.create({
  // this is an ngrok url that changes every 8 hours
  // restart the ngrok server and update the url to run the app
  baseURL: "http://0a32d757.ngrok.io"
});
