import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UserCard from './UserCard';

// export default function UsersList() {
//     const [users, setUsers] = React.useState([]);


    // fetch the users from localhost
    // React.useEffect(() => {
    //     const userInfo = JSON.parse(localStorage.getItem('userDetails'));
    //     if (userInfo == null) {
    //         return;
    //     }
    //     setUsers(userInfo);
    // }, []);
//     return (
//         <>
//             {users.map((user, index) => (
//                 <UserCard key={index} user={user} />

//             ))}
//         </>
//     );
// }