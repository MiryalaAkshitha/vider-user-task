import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, TextField } from '@mui/material';

export default function UserForm(props) {
    const { onClose, open, addNewUser } = props;
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

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

        // create a random id with time
        const id = new Date().getTime();
        // create a new user object
        addNewUser({ id, name, email });

        setEmail('');
        setName('');
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Add new user</DialogTitle>
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Button onClick={handleSubmit}>Save</Button>
        </Dialog>
    );
}

UserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired, 
    addNewUser: PropTypes.func.isRequired
};