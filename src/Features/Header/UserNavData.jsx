import {Box, styled} from "@mui/material";
import HeaderCart from "./HeaderCart.jsx";
import HeaderUser from "./HeaderUser.jsx";

const UserBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem"
}))

function UserNavData() {
    return (
        <UserBox>
            <HeaderCart/>
            <HeaderUser/>
        </UserBox>
    );
}

export default UserNavData;