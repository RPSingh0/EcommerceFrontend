import {Box} from "@mui/material";
import {StyledSingleProductInformationTypographyHeadings} from "../Ui/RStyledComponents.jsx";
import {Link} from "react-router-dom";
import {ArrowForward} from "@mui/icons-material";

function SimilarProductsInfo() {
    return (
        <Box>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <StyledSingleProductInformationTypographyHeadings variant={"subtitle2"}>
                    Similar Products
                </StyledSingleProductInformationTypographyHeadings>
                <Link to={"/all"}>
                    <ArrowForward/>
                </Link>
            </Box>
        </Box>
    );
}

export default SimilarProductsInfo;