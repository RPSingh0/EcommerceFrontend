import {useState} from "react";
import CreateOrderReview from "./CreateReview.jsx";
import {Button, CardActions, CardContent, Typography} from "@mui/material";
import {ShoppingCartCheckoutOutlined} from "@mui/icons-material";
import {OrderItemCardMedia, StyledOrderCardOrders} from "./OrdersRComponents.jsx";

export function OrderedItem({item}) {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    function handleDialogOpen() {
        setIsDialogOpen(true)
    }

    function handleCloseDialogClose() {
        setIsDialogOpen(false);
    }

    return (
        <>
            <CreateOrderReview item={item} closeForm={handleCloseDialogClose} isFormOpen={isDialogOpen}/>
            <StyledOrderCardOrders>
                <OrderItemCardMedia image={item.productImage} altText={`${item.name}-cover-image`}/>
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {item.productName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {item.quantity} x &#x20B9; {item.productPrice} /-
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant={"outlined"} size="small" startIcon={<ShoppingCartCheckoutOutlined/>}
                            onClick={handleDialogOpen} fullWidth>
                        Write a Review
                    </Button>
                </CardActions>
            </StyledOrderCardOrders>
        </>
    );
}