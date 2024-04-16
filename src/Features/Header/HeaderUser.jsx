import {Avatar, IconButton} from "@mui/material";

function HeaderUser() {
    return (
        <IconButton>
            <Avatar
                alt={"user name"}
                sx={{width: 32, height: 32, objectFit: "contain"}}
                src={"/user/fall-back-user.png"}
            />
        </IconButton>
    );
}

export default HeaderUser;