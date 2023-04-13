import axios from "axios";

export default axios.create({
    baseURL: "https://www.omdbapi.com"
    // baseURL: "https://movierating-5171b.web.app"
})