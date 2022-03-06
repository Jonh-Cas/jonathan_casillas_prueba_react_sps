import useUserList from '../hooks/useUserList';
import '../styles/NameStyle.css'
import { useState } from 'react';
import { UserInfo } from '../interfaces/appInterfaces';
import UsersList from '../components/UsersList';
import UserCard from '../components/UserCard';

/**
 * Este componente contiene un CustomHook donde trae informacion de varios usuarios y
 * un Hook useState para guardar los valores de un usuario
 * @returns Este componente contienen toda la pagina web 
 */


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