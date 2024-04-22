import {Box, Button, ButtonGroup, styled, Typography} from "@mui/material";
import {Add, DeleteOutline, Remove, UpdateOutlined} from "@mui/icons-material";
import {useState} from "react";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useUpdateCart} from "./useUpdateCart.js";
import {getItemQuantityFromCart} from "../../services/user/userSlice.js";
import {useDeleteCartItem} from "./useDeleteCartItem.js";

const StyledSingleCartItemContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    justifyContent: "space-between",
    padding: "1rem",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column"
    },

    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: "row"
    }
}));

const StyledCartItemButtonContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "space-between",

    [theme.breakpoints.down('lg')]: {
        flexDirection: "row"
    },

    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: "column"
    }
}));

function CartItem({item}) {
    const presentQuantity = useSelector(getItemQuantityFromCart(item._id))
    const [quantity, setQuantity] = useState(presentQuantity);
    const token = useSelector(getAuthToken);
    const {isCreating: isUpdating, updateCart} = useUpdateCart();
    const {isDeletingItem, deleteCartItem} = useDeleteCartItem();
    const shouldDisable = presentQuantity === quantity;

    function increaseQuantity() {
        setQuantity(val => val + 1);
    }

    function decreaseQuantity() {
        setQuantity(val => val === 1 ? 1 : val - 1)
    }

    function handleDeleteItem() {
        deleteCartItem({
            identifier: item._id,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Item deleted from cart");
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    function handleUpdateCart() {
        updateCart({
            identifier: item._id,
            quantity: quantity,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Cart Updated")
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    return (
        <StyledSingleCartItemContainer>
            <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                <Box height={100}>
                    <img src={item.coverImage} alt={`${item.name} cover image`} height={"100%"}/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <Box>
                        <Typography variant={"h6"}>
                            {item.name}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            &#x20B9;{item.price}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <StyledCartItemButtonContainer>
                <ButtonGroup variant="outlined" fullWidth>
                    <Button onClick={increaseQuantity} size={"small"}>
                        <Add/>
                    </Button>
                    <Button disableRipple size={"small"}>
                        {quantity}
                    </Button>
                    <Button onClick={decreaseQuantity} size={"small"}>
                        <Remove/>
                    </Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" fullWidth>
                    <Button size={"small"} onClick={handleUpdateCart} disabled={isUpdating || shouldDisable}>
                        <UpdateOutlined/>
                    </Button>
                    <Button size={"small"} onClick={handleDeleteItem} disabled={isDeletingItem || isUpdating}>
                        <DeleteOutline/>
                    </Button>
                </ButtonGroup>
            </StyledCartItemButtonContainer>
        </StyledSingleCartItemContainer>
    );
}

export default CartItem;