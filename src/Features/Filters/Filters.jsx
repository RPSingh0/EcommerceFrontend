import {Box, styled, Typography} from "@mui/material";

const StyledFiltersContainer = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "1rem",
    height: "40%",
}))

function Filters() {
    return (
        <StyledFiltersContainer>
            <Typography variant={"h6"} color={"white"} textAlign={"center"}>
                Filters
            </Typography>
        </StyledFiltersContainer>
    );
}

export default Filters;