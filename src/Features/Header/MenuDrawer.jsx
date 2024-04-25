import {Box, Button, Drawer, styled, Typography} from "@mui/material";
import HeaderUser from "./HeaderUser.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserName, isUserLoggedIn, logoutUser} from "../../services/user/userSlice.js";
import {
    AccountCircleOutlined,
    AppRegistrationOutlined,
    FavoriteBorderOutlined,
    LocalOfferOutlined,
    LoginOutlined,
    LogoutOutlined,
    QueryStatsOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {removeAuthStatus, setAuthStatus} from "../../services/user/authStatusSlice.js";

const StyledDrawerLink = styled(Button)(() => ({
    display: "flex",
    flexDirection: "row",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "start",
}));

function CustomDrawerButton({buttonText, linkTo, toggleHeader, clickHandler, children}) {
    return (
        <Link to={linkTo} onClick={() => toggleHeader(false)} style={{textDecoration: "none"}}>
            <StyledDrawerLink fullWidth onClick={clickHandler ? clickHandler : null}>
                {children}
                <Typography variant={"subtitle1"}>
                    {buttonText}
                </Typography>
            </StyledDrawerLink>
        </Link>

    );
}

function MenuDrawer({isOpen, toggleHeader}) {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const username = useSelector(getUserName);
    const dispatch = useDispatch();

    function handleUserLogout() {
        dispatch(logoutUser());
        dispatch(removeAuthStatus());
    }

    return (
        <Drawer
            open={isOpen}
            keepMounted
            onClose={() => toggleHeader(false)}
        >
            <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", alignItems: "center"}}>
                <HeaderUser height={64} width={64}/>
                {isLoggedIn ? <Typography variant={"h6"}>{username}</Typography> : ""}
                <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", width: "100%"}}>
                    {!isLoggedIn &&
                        <>
                            <CustomDrawerButton buttonText={"Log In"} linkTo={"/login"} toggleHeader={toggleHeader}>
                                <LoginOutlined/>
                            </CustomDrawerButton>
                            <CustomDrawerButton buttonText={"Sign Up"} linkTo={"/signup"} toggleHeader={toggleHeader}>
                                <AppRegistrationOutlined/>
                            </CustomDrawerButton>
                        </>
                    }
                    <CustomDrawerButton buttonText={"Wishlist"} linkTo={"/wishlist"} toggleHeader={toggleHeader}>
                        <FavoriteBorderOutlined/>
                    </CustomDrawerButton>
                    <CustomDrawerButton buttonText={"Cart"} linkTo={"/cart"} toggleHeader={toggleHeader}>
                        <ShoppingCartOutlined/>
                    </CustomDrawerButton>
                    <CustomDrawerButton buttonText={"Orders"} linkTo={"/orders"} toggleHeader={toggleHeader}>
                        <LocalOfferOutlined/>
                    </CustomDrawerButton>
                    <CustomDrawerButton buttonText={"Account"} linkTo={"/account"} toggleHeader={toggleHeader}>
                        <AccountCircleOutlined/>
                    </CustomDrawerButton>
                    <CustomDrawerButton buttonText={"Stats"} linkTo={"/stats"} toggleHeader={toggleHeader}>
                        <QueryStatsOutlined/>
                    </CustomDrawerButton>
                    {isLoggedIn &&
                        <>
                            <CustomDrawerButton buttonText={"Log Out"} linkTo={""} toggleHeader={toggleHeader}
                                                clickHandler={handleUserLogout}>
                                <LogoutOutlined/>
                            </CustomDrawerButton>
                        </>
                    }
                </Box>
            </Box>
        </Drawer>
    );
}

export default MenuDrawer;