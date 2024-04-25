import {StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    styled,
    Typography
} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import WishlistItem from "./WishlistItem.jsx";

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

    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    return (
        <StyledProductsContainer>
            <StyledProductsCardBox>
                {!isLoadingWishlist && !wishlistError && wishlistData.data.products.map(item =>
                    <WishlistItem item={item}/>
                )}
            </StyledProductsCardBox>
        </StyledProductsContainer>
    );
}

export default Wishlist;