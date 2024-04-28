import {Avatar, IconButton} from "@mui/material";
import {useSelector} from "react-redux";
import {getUserImage} from "../../services/user/userSlice.js";

function HeaderUser({height = 32, width = 32}) {

    const userImage = useSelector(getUserImage);

    return (
        <IconButton disableRipple>
            <Avatar
                alt={"user name"}
                sx={{width: {width}, height: {height}, objectFit: "contain"}}
                src={userImage ? userImage : "/user/user-not-found.jpg"}
            />
        </IconButton>
    );
}

export default HeaderUser;