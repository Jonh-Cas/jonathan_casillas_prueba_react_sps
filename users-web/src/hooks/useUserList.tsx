import { useEffect, useState } from 'react'
import getUserListApi from '../Api/apiUsers'
import { InfoUsers, UserInfo } from '../interfaces/appInterfaces';


const useUserList = () => {

    const [users, setUsers] = useState<UserInfo[]>([]);

    const getUsers = () => {
        getUserListApi.get<InfoUsers>('/users').then(resp => {
            setUsers(resp.data.data);
        })
    }

    useEffect(() => {

        getUsers();

    }, [])

    return {
        users
    }
}

export default useUserList;