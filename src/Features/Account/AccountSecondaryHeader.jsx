import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {StyledSecondaryContainerHeaderAccount} from "./AccountRComponents.jsx";

function AccountSecondaryHeader({text, linkTo, showLink = true}) {
    return (
        <StyledSecondaryContainerHeaderAccount>
            <Typography variant={"h6"}>
                {text}
            </Typography>
            {showLink &&
                <NavLink to={linkTo} style={{textDecoration: "none"}}>
                    view All
                </NavLink>
            }
        </StyledSecondaryContainerHeaderAccount>
    );
}

export default AccountSecondaryHeader;