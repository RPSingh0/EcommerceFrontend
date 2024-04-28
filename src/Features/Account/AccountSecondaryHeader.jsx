import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {StyledSecondaryContainerHeaderAccount} from "./AccountRComponents.jsx";

function AccountSecondaryHeader({text, linkTo}) {
    return (
        <StyledSecondaryContainerHeaderAccount>
            <Typography variant={"h6"}>
                {text}
            </Typography>
            <NavLink to={linkTo} style={{textDecoration: "none"}}>
                view All
            </NavLink>
        </StyledSecondaryContainerHeaderAccount>
    );
}

export default AccountSecondaryHeader;