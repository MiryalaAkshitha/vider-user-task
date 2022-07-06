import { Button, Card, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import React from 'react'
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
        <Card style={{height:"200px",width:"200px",display:"flex",justifyContent:"flexStart",alignItems:"center",flexDirection:"column",margin:"20px",padding:"20px"}}>
            <Typography variant="h5" component="h2">
                {user.name}
            </Typography>
            <Typography variant="body2" component="p">
                {user.email}
            </Typography>
            <div style={{display:"flex"}}>
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
