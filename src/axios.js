import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-stripe-v1.herokuapp.com",
});

export default instance;
