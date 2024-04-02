import {Box, styled, Typography} from "@mui/material";

const StyledNotFoundBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
}));

function PageNotFound() {
    return (
        <StyledNotFoundBox>
            <Typography variant={"h6"} noWrap>
                Ja re, galat jagah aa gya hai tu
            </Typography>
        </StyledNotFoundBox>
    );
}

export default PageNotFound;