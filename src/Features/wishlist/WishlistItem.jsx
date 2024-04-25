import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {DeleteOutline, ShoppingCartCheckoutOutlined} from "@mui/icons-material";
import {useDeleteWishlistItem} from "./useDeleteWishlistItem.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";
import {useUpdateCart} from "../cart/useUpdateCart.js";
import {isItemAlreadyInCart} from "../../services/user/userSlice.js";

function WishlistItem({item}) {

    const {isDeletingItem, deleteWishlistItem} = useDeleteWishlistItem();
    const {isCreating: isAddingInCart, updateCart} = useUpdateCart();
    const itemInCart = useSelector(isItemAlreadyInCart(item._id));
    const shouldDisableAddToCart = itemInCart || isAddingInCart;
    const token = useSelector(getAuthToken);

    function handleRemoveFromWishlist() {
        deleteWishlistItem({
            identifier: item._id,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Item removed from wishlist");
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    function handleMoveToCart() {
        updateCart({
            identifier: item._id,
            quantity: 1,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Item added to cart");
                handleRemoveFromWishlist();
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    return (
        <Card sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={item.coverImage}
                    sx={{height: 150, objectFit: "contain"}}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        &#x20B9; {item.price} /-
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant={"contained"} size="small" color="primary" startIcon={<ShoppingCartCheckoutOutlined/>} onClick={handleMoveToCart}
                        disabled={shouldDisableAddToCart}>
                    Move to Cart
                </Button>
                <Button variant={"contained"} size="small" color="primary" startIcon={<DeleteOutline/>} onClick={handleRemoveFromWishlist}
                        disabled={isDeletingItem}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    );
}

export default WishlistItem;