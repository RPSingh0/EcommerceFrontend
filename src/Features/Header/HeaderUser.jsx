import {Avatar, IconButton} from "@mui/material";
import {useSelector} from "react-redux";
import {getUserImage} from "../../services/user/userSlice.js";

function HeaderUser() {

    const userImage = useSelector(getUserImage);

    return (
        <IconButton>
            <Avatar
                alt={"user name"}
                sx={{width: 32, height: 32, objectFit: "contain"}}
                src={userImage ? userImage : "/user/fall-back-user.png"}
            />
        </IconButton>
    );
}

export default HeaderUser;