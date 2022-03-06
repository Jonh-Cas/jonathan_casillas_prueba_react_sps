import { useState, useEffect } from 'react';
import apiUserList from '../api/apiUserList';
import { InfoUsers, UserInfo } from '../interfaces/userListInterfaces';

const useGetUsersList = () => {
    
    const [users, setUsers] = useState<UserInfo[]>([]);

    const getUserList = async() => {
       apiUserList.get<InfoUsers>('').then( resp => {
          setUsers(resp.data.data);
       } )
    }

    useEffect(() => {
      
        getUserList();

    }, []);
    

  
    return {
        users
  }
}

export default useGetUsersList;