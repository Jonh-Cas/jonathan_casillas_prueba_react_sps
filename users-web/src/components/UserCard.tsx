import { UserInfo } from '../interfaces/appInterfaces';
import '../styles/NameStyle.css'

interface Props {
    user: UserInfo;
}

const UserCard = ({ user }: Props) => {
    return (
        <div className='imageCard' >
            <div className='userCard' >
                <img
                    src={user.avatar}
                    className='imageUserCard'
                />
                <h1 >{user.first_name + ' ' + user.last_name} </h1>
                <h2 >{user.email} </h2>
            </div>
        </div>
    )
}

export default UserCard