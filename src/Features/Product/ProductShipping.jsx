import {Box, Typography} from "@mui/material";
import {Forward30, Speed, SupportAgent, VerifiedUser} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

function ProductShipping() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "1rem",
            color: grey["500"]
        }}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Speed fontSize={"small"}/>
                <Typography variant={"caption"} textAlign={"center"}>
                    Free and Fast Shipping
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Forward30 fontSize={"small"}/>
                <Typography variant={"caption"} textAlign={"center"}>
                    30-Day MoneyBack Guarantee
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <VerifiedUser fontSize={"small"}/>
                <Typography variant={"caption"} textAlign={"center"}>
                    12 Month Hassle Free Warranty
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <SupportAgent fontSize={"small"}/>
                <Typography variant={"caption"} textAlign={"center"}>
                    Lifetime Customer Support
                </Typography>
            </Box>
        </Box>
    );
}

export default ProductShipping;