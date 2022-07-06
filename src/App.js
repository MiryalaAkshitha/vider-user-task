import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';
import UserForm from './userForm';
import UsersList from './UsersList';

export default function App() {
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h2>User Data!</h2>
      <UserForm
        open={open}
        onClose={handleClose}
      />
      <UsersList />
      <Button variant="contained" onClick={handleClickOpen} style={{margin:"20px"}}> + Add new user</Button>
      
    </>
  );
}
