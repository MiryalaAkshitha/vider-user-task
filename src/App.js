import * as React from 'react';
import { Button } from '@mui/material';
import UserForm from './userForm';
import UserCard from './UserCard';

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNewUser = (user) => {
    setUsers([...users, user]);
  }

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const handleEditUser = (user) => {
    setUsers(users.map(u => u.id === user.id ? user : u));
  }

  return (
    <>
      <UserForm
        open={open}
        onClose={handleClose}
        addNewUser={handleAddNewUser}
      />

      {users.map((user, index) => (
        <UserCard key={index} user={user} deleteUser={handleDeleteUser} editUser={handleEditUser} />
      ))}
      <Button variant="contained" onClick={handleClickOpen} style={{margin:"10px"}}> + Add new user</Button>

    </>
  );
}
