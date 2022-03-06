/**
 * Este componente contiene un CustomHook donde trae informacion de varios usuarios y
 * un Hook useState para guardar los valores de un usuario
 * @returns hay 2 componentes en el que si no hay una lista de usuarios cargara uno 
 * y si hay una lista de usuarios cargara otro. 
 * Este segundo componente regresa un componente Padre en el cual visualiza  
 * una lista de botones de  los usuarios y pone una tarjeta de un usuario con
 * más información al darle click a uno de ellos  
 */

import useUserList from '../hooks/useUserList';
import '../styles/NameStyle.css'
import { useState } from 'react';
import { UserInfo } from '../interfaces/appInterfaces';
import UsersList from '../components/UsersList';
import UserCard from '../components/UserCard';


const MainScreen = () => {

    const { users } = useUserList()
    const [userCard, setUserCard] = useState<UserInfo>();

    if (!users) {
        return (
            <h1> Cargando... </h1>
        )
    }

    return (
        <div className='container' >
            
            <UsersList
                users={users}
                saveUser={setUserCard}
            />

            {
                (userCard) &&

                <UserCard
                    user={userCard}
                />
            }

        </div>
    )
}

export default MainScreen;