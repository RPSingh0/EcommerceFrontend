import {Box, Typography} from "@mui/material";

function PageNotFound() {
    return (
        <Box sx={{
            position: "absolute",
            height: "15rem",
            width: "15rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <img src={"/notFound/not-found.png"} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
            <Typography variant={"subtitle1"}>
                Sorry, this page does not exists
            </Typography>
        </Box>
    );
}

export default PageNotFound;