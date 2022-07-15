import * as React from 'react'
import PropTypes from 'prop-types'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function UserDialog(props) {
    const { onClose, userData, open } = props

    const handleClose = () => {
        onClose()
    }

    return (
        <>
            <Dialog
                onClose={handleClose}
                open={open}
                PaperProps={{
                    sx: {
                        p: 2,
                        height: 200,
                        width: 250,
                    },
                }}
                maxWidth={'sm'}
                fullWidth
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">User Details</Typography>

                    <Typography variant="body1">Name: {userData.name}</Typography>
                    <Typography variant="body1"> Email: {userData.email}</Typography>
                    <Typography variant="body1"> Number: {userData.number}</Typography>

                </Box>
            </Dialog>
        </>
    )
}

UserDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
}
