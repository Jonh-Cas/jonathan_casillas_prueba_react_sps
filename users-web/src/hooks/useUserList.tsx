import { useEffect, useState } from 'react'
import getUserListApi from '../Api/apiUsers'
import { InfoUsers, UserInfo } from '../interfaces/appInterfaces';

/**
 * Este CustomHook tiene un useStateque gusarda informacion de un usuario. 
 * Se hace una petición para guardar una lista de usuarios con su información.
 * Le utiliza un hook useEffect para activar la petición.
 * La informacion del usuario es primer nombre, apellido, imagen del usuario y email
 * @returns Retorna un arreglo de usuarios con toda su información
 */


const useUserList = () => {

    const [users, setUsers] = useState<UserInfo[]>([]);

    const getUsers = () => {
        getUserListApi.get<InfoUsers>('/users').then(resp => {
            setUsers(resp.data.data);
        }).catch( err => console.log(err) )
    }

    useEffect(() => {

        getUsers();

    }, [])

    return {
        users
    }
}

export default useUserList;