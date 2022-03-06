import axios from "axios";

/**
 * Se utiliza axios para crear la peticón hacia la página 
 */

const getUserListApi = axios.create({
    baseURL: 'https://reqres.in/api'
})

export default getUserListApi;