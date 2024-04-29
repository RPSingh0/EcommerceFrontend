import {Button, ButtonGroup} from "@mui/material";
import {Add, DeleteOutline, Remove, UpdateOutlined} from "@mui/icons-material";
import {useState} from "react";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useUpdateCart} from "./useUpdateCart.js";
import {getItemQuantityFromCart} from "../../services/user/userSlice.js";
import {useDeleteCartItem} from "./useDeleteCartItem.js";
import {
    CartItemImageBox,
    CartNamePriceBox,
    StyledImageNamePriceBoxCart,
    StyledItemButtonContainerCart,
    StyledSingleItemContainerCart
} from "./CartRComponents.jsx";


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
            }
        });
    }

    function handleUpdateCart() {
        updateCart({
            identifier: item._id,
            quantity: quantity,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Cart Updated")
            }
        })
    }

    return (
        <StyledSingleItemContainerCart>
            <StyledImageNamePriceBoxCart>
                <CartItemImageBox image={item.coverImage} altText={item.name}/>
                <CartNamePriceBox name={item.name} price={item.price}/>
            </StyledImageNamePriceBoxCart>
            <StyledItemButtonContainerCart>
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
            </StyledItemButtonContainerCart>
        </StyledSingleItemContainerCart>
    );
}

export default CartItem;