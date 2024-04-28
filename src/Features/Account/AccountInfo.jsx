import {Box, Typography} from "@mui/material";
import {getFormattedDate} from "../../utilities/util.jsx";
import {useSelector} from "react-redux";
import {getUserDetails} from "../../services/user/userSlice.js";

function AccountInfo() {

    const {firstName, lastName, email, mobile, address, createdOn} = useSelector(getUserDetails);

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Box>
                <Typography variant={"h5"}>
                    {firstName} {lastName}
                </Typography>
                <Typography variant={"subtitle2"}>
                    Email: {email}
                </Typography>
                <Typography variant={"subtitle2"}>
                    Mobile: {mobile}
                </Typography>
                <Typography variant={"subtitle2"}>
                    Address: {address}
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Typography variant={"caption"}>
                    Joined on: {getFormattedDate(createdOn)}
                </Typography>
            </Box>
        </Box>
    );
}

export default AccountInfo;