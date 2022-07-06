import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, TextField } from '@mui/material';

export default function EditUserForm(props) {
    const { onClose, userData, open } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClose = () => {
        onClose();
        setEmail('');
        setName('');
    };

    const handleSubmit = () => {
        if (name == '' || email == '') {
            alert('Please fill all fields');
            return;
        }

        // find the user in localStorage and update the name and email
        const userInfo = JSON.parse(localStorage.getItem('userDetails'));
        if (userInfo == null) {
            return;
        }
        const index = userInfo.findIndex(user => user.id == userData.id);
        if (index == -1) {
            return;
        }
        userInfo[index].name = name;
        userInfo[index].email = email;
        localStorage.setItem('userDetails', JSON.stringify(userInfo));

        setEmail('');
        setName('');
        onClose();
    }

    // set the values of name and email
    React.useEffect(() => {
        if (userData == null) {
            return;
        }
        setName(userData.name);
        setEmail(userData.email);
    }, [userData]);

    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>Edit user</DialogTitle>
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} style={{padding:"10px"}} />
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} style={{padding:"10px"}} />

            <Button onClick={handleSubmit}>Save Changes</Button>
        </Dialog>
    );
}

EditUserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
};