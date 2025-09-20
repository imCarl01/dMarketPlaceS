import axios from "axios";

const storeApi = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers:{
        "Content-Type":"application/josn",
    }
})

export default storeApi;

