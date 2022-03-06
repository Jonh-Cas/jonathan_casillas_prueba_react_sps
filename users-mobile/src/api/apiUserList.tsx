import axios from "axios";

/**
 * esta funcion crea las condiciones para hacer la petición 
 */

const apiUserList = axios.create({
    baseURL: 'https://reqres.in/api/users'
})

export default apiUserList;