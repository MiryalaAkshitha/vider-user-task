import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button, TextField } from "@mui/material";

export default function EditUserForm(props) {
    const { onClose, userData, open, editUser } = props;
    const [name, setName] = React.useState(userData.name);
    const [email, setEmail] = React.useState(userData.email);
    const [number, setNumber] = React.useState(userData.number);

    const handleClose = () => {
        onClose();
        setEmail("");
        setName("");
        setNumber("");
    };

    const handleSubmit = () => {
        if (name == "" || email == "" || number == "") {
            alert("Please fill all fields");
            return;
        }

        userData.name = name;
        userData.email = email;
        userData.number = number;
        editUser(userData);
        setEmail("");
        setName("");
        setNumber("");
        onClose();
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            PaperProps={{
                sx: {
                    p: 2,
                },
            }}
            fullWidth
            maxWidth={"sm"}
        >
            <DialogTitle>Edit user</DialogTitle>
            <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ padding: "5px", margin: "10px" }}
                required
            />
            <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ padding: "5px", margin: "10px" }}
                required
            />
            <TextField
                id="standard-basic"
                label="number"
                variant="standard"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                sx={{ padding: "5px", margin: "10px" }}
                required
            />

            <Button onClick={handleSubmit}>Save Changes</Button>
        </Dialog>
    );
}

// props is not necessary typescript will takecare

EditUserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
};
