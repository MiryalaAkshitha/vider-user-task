import { Button, Card, IconButton, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import UserDialog from './UserDialog';
import EditUserForm from './EditUser';

function UserCard({ user, deleteUser, editUser }) {
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
        deleteUser(user.id)
    }

    return (

        <Card elevation={3} sx={{ padding: "20px", height: "200px", width: "100%", margin: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h5" component="h2">
                    {user.name}
                </Typography>
                <MoreVertIcon />

            </Box>

            <Typography variant="body2" component="p">
                {user.email}
            </Typography>

            <Typography variant="body2" component="p">
                {user.number}
            </Typography>
            <div>
                <IconButton aria-label="delete" color="primary" onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary" onClick={handlePreview}>
                    <PreviewIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>

            <UserDialog
                userData={user}
                open={openDialog}
                onClose={handleCloseDialog}
            />

            <EditUserForm userData={user} open={openEditDialog} onClose={handleCloseEditDialog} editUser={editUser} />
        </Card>

    )
}

export default UserCard
