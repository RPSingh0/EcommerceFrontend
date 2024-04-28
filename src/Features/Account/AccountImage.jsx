import {Box, Tooltip} from "@mui/material";
import {EditOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getUserImage} from "../../services/user/userSlice.js";
import {StyledEditIconButtonAccount, StyledUserAvatarAccount} from "./AccountRComponents.jsx";

function AccountImage({handleEditModal}) {

    const userImage = useSelector(getUserImage);

    return (
        <Box sx={{position: "relative"}}>
            <StyledEditIconButtonAccount>
                <Tooltip title={"Edit Info"}>
                    <EditOutlined onClick={handleEditModal}/>
                </Tooltip>
            </StyledEditIconButtonAccount>
            <StyledUserAvatarAccount
                alt={"user name"}
                src={userImage ? userImage : "/user/user-not-found.jpg"}
                variant={"rounded"}
            />
        </Box>
    );
}

export default AccountImage;