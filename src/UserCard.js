import { Button, Card, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import React from 'react'
import UserDialog from './UserDialog';
import EditUserForm from './EditUser';
import useState from "react";

function UserCard({ user }) {
    const [openDialog, setOpenDialog] = React.useState(false)
    const [openEditDialog, setOpenEditDialog] = React.useState(false)

    const handlePreview = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const handleEdit = () => {
        setOpenEditDialog(true)
    }

    const handleCloseEditDialog = () => {
        setOpenEditDialog(false)
    }

    const handleDelete = () => {
        // delete the user from localStorage
        const userInfo = JSON.parse(localStorage.getItem('userDetails'));
        if (userInfo == null) {
            return;
        }
        const newUserInfo = userInfo.filter(u => u.id !== user.id);
        localStorage.setItem('userDetails', JSON.stringify(newUserInfo));
    }

    return (
        <Card style={{ height:"200px",width:"200px",padding:"20px", margin:"10px"}}>
            <Typography variant="h5" component="h2">
                {user.name}
            </Typography>
            <Typography variant="body2" component="p" >
                {user.email}
            </Typography>

            <IconButton aria-label="delete" color="primary" onClick={handleEdit}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" color="primary" onClick={handlePreview}>
                <PreviewIcon />
            </IconButton>
            <IconButton aria-label="delete" color="secondary" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>

            <UserDialog
                userData={user}
                open={openDialog}
                onClose={handleCloseDialog}
            />

            <EditUserForm userData={user} open={openEditDialog} onClose={handleCloseEditDialog} />
        </Card>
    )
}

export default UserCard
