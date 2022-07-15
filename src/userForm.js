import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography, Input } from '@mui/material';

export default function UserForm(props) {
    const { onClose, open, addNewUser } = props;
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [number, setNumber] = React.useState('')

    const handleClose = () => {
        onClose();
        setEmail('');
        setName('');
        setNumber('');
    };

    const handleSubmit = () => {
        if (name == '' || email == '' || number == '') {
            alert('Please fill all fields');
            return;
        }


        // create a random id with time
        const id = new Date().getTime();
        // create a new user object
        addNewUser({ id, name, email, number });

        setEmail('');
        setName('');
        setNumber('');
        onClose();

    }

    return (
        <Dialog onClose={handleClose}
            PaperProps={{
                sx: {
                    p: 2
                }
            }}
            open={open}
            fullWidth maxWidth={'sm'}>
            <Typography variant="subtitle1" mb={2}>Add new user</Typography>
            <Input id="standard-basic" placeholder="Enter Name" type="text" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} required sx={{ padding: "5px", margin: "10px" }} />
            <Input id="standard-basic" placeholder="Enter Email" type="email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} required sx={{ padding: "5px", margin: "10px" }} />
            <Input id="standard-basic" placeholder='Enter Mobile.no' type="digit" label="Number" variant="standard" value={number} onChange={(e) => setNumber(e.target.value)} required sx={{ padding: "5px", margin: "10px" }} />
            <Button variant="contained" sx={{ mt: 2, mb: 2 }} onClick={handleSubmit}>Save</Button>
        </Dialog>
    );
}

UserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    addNewUser: PropTypes.func.isRequired
};
