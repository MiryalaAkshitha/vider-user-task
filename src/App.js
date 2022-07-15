import * as React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Input } from "@mui/material";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserForm from "./userForm";
import UserCard from "./UserCard";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [searchedUser, setSearchedUser] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddNewUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };


  return (
    <Box p={2}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>

        <TextField
          variant="outlined"
          size="small"
          sx={{
            width: 400
          }}
          placeholder="Search"
          InputProps={{
            endAdornment: <SearchIcon />
          }}
          onChange={event => { setSearchedUser(event.target.value) }} />
        <Button variant="contained" onClick={handleClickOpen}>
          + Add new user
        </Button>
      </Box>

      <Grid container spacing={2} mt={3}>
        <UserForm
          open={open}
          onClose={handleClose}
          addNewUser={handleAddNewUser}
        />
        {users.filter((val) => {
          if (searchedUser == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchedUser.toLowerCase())) {
            return val
          }
        }).map((user, index) => (
          <Grid item xs={3}>
            <UserCard
              key={index}
              user={user}
              deleteUser={handleDeleteUser}
              editUser={handleEditUser}
            />

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
