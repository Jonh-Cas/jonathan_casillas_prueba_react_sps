/**
 * Este CustoHook hace una petición y regresa una matriz de infomración de varios usuarios 
 * que son su nombre, apellido, email y avatar o imagen del usuario 
 * @returns retorna una matriz de ususarios con su información.  
 */

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