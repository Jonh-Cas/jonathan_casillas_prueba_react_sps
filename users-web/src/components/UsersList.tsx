/**
 *  Este es un componente que retorna Botones de los usuarios 
 * @param Prosp Estas propiedades contienen el arreglo de los usuarios y la función
 *              en el que se guarda la información de uno de ellos 
 * @returns Este componente visualisa una lista de botones de usuarios 
 */

import { UserInfo } from '../interfaces/appInterfaces';
import '../styles/NameStyle.css'

interface Props {
    users: UserInfo[];
    saveUser: (user: UserInfo) => void;
}


const UsersList = ({ users, saveUser }: Props) => {
    return (
        <div className='userList' >
            {
                users.map(user => (
                   
                        <button
                            className='imagen'
                            onClick={() => saveUser(user)}
                        >
                            <img
                                src={user.avatar}
                                className='imageStyle'
                                key={user.id}
                            />
                            <h3 className='textName' > {user.first_name + ' ' + user.last_name} </h3>
                        </button>
   

                ))
            }
        </div>
    )
}

export default UsersList;