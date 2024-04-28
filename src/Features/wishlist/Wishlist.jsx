import {StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import {Box, CircularProgress, styled, Typography} from "@mui/material";
import WishlistItem from "./WishlistItem.jsx";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";

const StyledProductsCardBox = styled(Box)(({theme}) => ({
    display: "grid",
    rowGap: "1rem",
    columnGap: "1rem",

    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: "1fr",
    },

    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: "1fr 1fr",
    },

    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: "1fr 1fr 1fr",
    },

    [theme.breakpoints.up('xl')]: {
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
}))

function Wishlist() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    if (!isLoggedIn) {
        return (
            <Box sx={{
                position: "absolute",
                height: "15rem",
                width: "15rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <img src={"/auth/login-required.png"} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
                <Typography variant={"subtitle1"}>
                    Please log in to add something to wishlist
                </Typography>
            </Box>
        );
    }

    if (!isLoadingWishlist && !wishlistError && wishlistData.data.products.length === 0) {
        return (
            <Box sx={{
                position: "absolute",
                height: "15rem",
                width: "15rem",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <img src={"/wishlist/empty-wishlist.png"} height={"100%"} width={"100%"} style={{objectFit: "cover"}}/>
                <Typography variant={"subtitle1"}>
                    Add some products here...
                </Typography>
            </Box>
        );
    }

    return (
        <>
            {!isLoadingWishlist && !wishlistError &&
                <StyledProductsContainer>
                    <StyledProductsCardBox>
                        {wishlistData.data.products.map(item =>
                            <WishlistItem item={item}/>
                        )}
                    </StyledProductsCardBox>
                </StyledProductsContainer>
            }
            {isLoadingWishlist &&
                <Box sx={{
                    position: "fixed",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, 50%)"
                }}>
                    <CircularProgress/>
                </Box>
            }
        </>
    );
}

export default Wishlist;