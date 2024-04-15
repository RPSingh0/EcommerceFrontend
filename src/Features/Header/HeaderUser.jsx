import {Avatar, IconButton, Menu, MenuItem} from "@mui/material";
import {useState} from "react";

function HeaderUser() {

    const [anchorElement, setAnchorElement] = useState(null);
    const isMenuOpen = Boolean(anchorElement);

    function handleUserProfileMenuOpen(event) {
        setAnchorElement(event.target);
    }

    function handleUserProfileMenuClose() {
        setAnchorElement(null);
    }

    return (
        <IconButton>
            <Avatar
                alt={"user name"}
                sx={{width: 32, height: 32}}
                onClick={handleUserProfileMenuOpen}
            />
            <Menu
                anchorEl={anchorElement}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                id={"user-profile-menu"}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleUserProfileMenuClose}
            >
                {
                    ["user", "login", "signup"].map(item =>
                        <MenuItem key={item} onClick={handleUserProfileMenuClose}>
                            {item}
                        </MenuItem>)
                }
            </Menu>
        </IconButton>
    );
}

export default HeaderUser;