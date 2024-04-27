import {Avatar, Box, IconButton, Paper, Rating, Typography} from "@mui/material";
import {DeleteOutlined, EditOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {getUserId} from "../../../services/user/userSlice.js";
import {useParams} from "react-router-dom";
import EditProductReview from "./EditProductReview.jsx";
import {useState} from "react";

function ProductReviewCard({item}) {
    const userId = useSelector(getUserId);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const {productId} = useParams();

    function handleEditModalOpen() {
        setEditModalOpen(true);
    }

    function handleEditModalClose() {
        setEditModalOpen(false);
    }

    return (
        <Paper sx={{display: "flex", flexDirection: "row", gap: "1rem", padding: "1rem", minWidth: "20rem"}}>
            <Avatar alt="Remy Sharp" src={item.user.userImage ? item.user.userImage : '/user/fall-back-user.png'}/>
            <Box>
                <Box
                    sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Typography variant={"subtitle2"}>
                        {item.user.firstName} {item.user.lastName}
                    </Typography>
                    {userId === item.user._id && productId === item.productId &&
                        <Box>
                            <IconButton size={"small"} onClick={handleEditModalOpen}>
                                <EditOutlined fontSize={"small"}/>
                            </IconButton>
                            <IconButton size={"small"}>
                                <DeleteOutlined fontSize={"small"}/>
                            </IconButton>
                            <EditProductReview isOpen={isEditModalOpen} closeModal={handleEditModalClose}
                                               reviewToEdit={item}/>
                        </Box>
                    }
                </Box>
                <Rating value={item.rating} size={"small"} readOnly/>
                <Typography variant={"body2"}>
                    {item.review}
                </Typography>
            </Box>
        </Paper>
    );
}

export default ProductReviewCard;