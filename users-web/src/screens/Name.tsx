import useUserList from '../hooks/useUserList';
import '../styles/NameStyle.css'
import { useState } from 'react';
import { UserInfo } from '../interfaces/appInterfaces';


const Name = () => {

    const { users } = useUserList()
    const [userCard, setUserCard] = useState<UserInfo>();

    if (!users) {
        return (
            <h1> Cargando... </h1>
        )
    }

    return (
        <div className='container' >
            <div className='userList' >
                {
                    users.map(user => (
                        <>
                            <button
                                className='imagen'
                                onClick={ () => setUserCard(user) }
                            >
                                <img
                                    src={user.avatar}
                                    className='imageStyle'
                                />
                                <h3 className='textName' > {user.first_name + ' ' + user.last_name} </h3>
                            </button>
                        </>

                    ))
                }
            </div>
            {
                (userCard) &&
                <div className='imageCard' >
                    <div className='userCard' >
                        <img
                            src={userCard.avatar}
                            className='imageUserCard'
                        />
                        <h1 >{userCard.first_name + ' ' + userCard.last_name  } </h1>
                        <h2 >{userCard.email } </h2>
                    </div>
                </div>
              

            }




        </div>
    )
}

export default Name;