import axios from "axios";

const apiUserList = axios.create({
    baseURL: 'https://reqres.in/api/users'
})

export default apiUserList;