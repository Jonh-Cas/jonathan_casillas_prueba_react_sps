import axios from "axios";


const getUserListApi = axios.create({
    baseURL: 'https://reqres.in/api'
})

export default getUserListApi;