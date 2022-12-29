import axios from "axios";

const instance = axios.create({
  baseURL: "https://frantic-fox-uniform.cyclic.app/",
});
export default instance;
