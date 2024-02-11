import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ddba16a0147449a38215496e1e5d91a5",
  },
});
