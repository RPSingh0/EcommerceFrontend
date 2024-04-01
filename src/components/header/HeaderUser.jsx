import {Avatar, IconButton} from "@mui/material";

function HeaderUser() {
    return (
        <IconButton>
            <Avatar
                alt={"user name"}
                sx={{width: 32, height: 32}}
            />
        </IconButton>
    );
}

export default HeaderUser;