import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button, TextField } from '@mui/material';

export default function EditUserForm(props) {
    const { onClose, userData, open, editUser } = props;
    const [name, setName] = React.useState(userData.name);
    const [email, setEmail] = React.useState(userData.email);

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

        userData.name = name;
        userData.email = email;
        editUser(userData);

        setEmail('');
        setName('');
        onClose();
    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Edit user</DialogTitle>
            <TextField id="standard-basic" label="Name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Button onClick={handleSubmit}>Save Changes</Button>
        </Dialog>
    );
}

EditUserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
};