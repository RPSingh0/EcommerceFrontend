import {StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Divider,
    IconButton,
    styled,
    Tooltip,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {getUserDetails, isUserLoggedIn} from "../../services/user/userSlice.js";
import {getFormattedDate} from "../../utilities/util.jsx";
import {EditOutlined} from "@mui/icons-material";
import {useCartContext} from "../../Contexts/CartContext.jsx";
import {NavLink, useNavigate} from "react-router-dom";
import {useWishlistContext} from "../../Contexts/WishlistContext.jsx";
import {useEffect, useState} from "react";
import EditUserDetails from "./EditUserDetails.jsx";

const StyledUserInfo = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",

    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "center",
    }
}));

const StyledUserAvatar = styled(Avatar)(({theme}) => ({
    objectFit: "contain",
    width: 250,
    height: 250,

    [theme.breakpoints.down('sm')]: {
        height: 150,
        width: 150
    }
}));

const StyledEditIconButton = styled(IconButton)(() => ({
    position: "absolute",
    zIndex: 1000,
    color: "white",
    right: "0"
}));

function Account() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const userDetails = useSelector(getUserDetails);
    const navigate = useNavigate();
    const {isLoadingCart, cartData, cartError} = useCartContext();
    const {isLoadingWishlist, wishlistData, wishlistError} = useWishlistContext();

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(function () {
        if (!isLoggedIn) {
            navigate("/login", {replace: true});
        }
    }, [isLoggedIn, navigate]);

    function handleEditModal() {
        setIsEditModalOpen(true);
    }

    return (
        <StyledProductsContainer>
            {isLoggedIn &&
                <Box sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                    <StyledUserInfo>
                        <Box sx={{position: "relative"}}>
                            <StyledEditIconButton>
                                <Tooltip title={"Edit Info"}>
                                    <EditOutlined onClick={handleEditModal}/>
                                </Tooltip>
                            </StyledEditIconButton>
                            <StyledUserAvatar
                                alt={"user name"}
                                sx={{}}
                                src={userDetails?.userImage ? userDetails?.userImage : "/user/user-not-found.jpg"}
                                variant={"rounded"}
                            />
                        </Box>
                        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Box>
                                <Typography variant={"h5"}>
                                    {userDetails.firstName} {userDetails.lastName}
                                </Typography>
                                <Typography variant={"subtitle2"}>
                                    Email: {userDetails.email}
                                </Typography>
                                <Typography variant={"subtitle2"}>
                                    Mobile: {userDetails.mobile}
                                </Typography>
                                <Typography variant={"subtitle2"}>
                                    Address: {userDetails.address}
                                </Typography>
                            </Box>
                            <Box sx={{display: "flex", flexDirection: "column"}}>
                                <Typography variant={"caption"}>
                                    Joined on: {getFormattedDate(userDetails.createdOn)}
                                </Typography>
                            </Box>
                        </Box>
                    </StyledUserInfo>
                    <Divider/>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Typography variant={"h6"}>
                                Cart
                            </Typography>
                            <NavLink to={"/cart"} style={{textDecoration: "none"}}>
                                view All
                            </NavLink>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            overflow: "auto",
                            padding: "1rem 1rem 1rem 0",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                            {!isLoadingCart && !cartError && cartData.data.products.map(item =>
                                <Card sx={{minWidth: 250, maxWidth: 250, padding: "1rem"}}>
                                    <CardMedia
                                        component="img"
                                        sx={{height: 150, objectFit: "contain"}}
                                        image={item.coverImage}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle2" component="div">
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )}
                        </Box>
                    </Box>
                    <Divider/>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Typography variant={"h6"}>
                                Wishlist
                            </Typography>
                            <NavLink to={"/wishlist"} style={{textDecoration: "none"}}>
                                view All
                            </NavLink>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "1rem",
                            overflow: "auto",
                            padding: "1rem 1rem 1rem 0",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                            {!isLoadingWishlist && !wishlistError && wishlistData.data.products.map(item =>
                                <Card sx={{minWidth: 250, maxWidth: 250, padding: "1rem"}}>
                                    <CardMedia
                                        component="img"
                                        sx={{height: 150, objectFit: "contain"}}
                                        image={item.coverImage}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle2" component="div">
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )}
                        </Box>
                    </Box>
                    {isEditModalOpen &&
                        <EditUserDetails isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen}/>}
                </Box>
            }
        </StyledProductsContainer>
    );
}

export default Account;