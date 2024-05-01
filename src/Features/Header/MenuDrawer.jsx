import {Drawer} from "@mui/material";
import HeaderUser from "./HeaderUser.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getUserName, isUserLoggedIn, logoutUser} from "../../services/user/userSlice.js";
import {
    AccountCircleOutlined,
    AppRegistrationOutlined,
    FavoriteBorderOutlined,
    LocalOfferOutlined,
    LoginOutlined,
    LogoutOutlined,
    ShoppingCartOutlined
} from "@mui/icons-material";
import {removeAuthStatus} from "../../services/user/authStatusSlice.js";
import {
    CustomDrawerButton,
    DisplayUserName,
    StyledDrawerElementContainerHeader,
    StyledDrawerLinkContainerHeader
} from "./HeaderRComponents.jsx";

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
            <StyledDrawerElementContainerHeader>
                <HeaderUser height={64} width={64}/>
                <DisplayUserName isLoggedIn={isLoggedIn} username={username}/>
                <StyledDrawerLinkContainerHeader>
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
                    {isLoggedIn &&
                        <>
                            <CustomDrawerButton buttonText={"Account"} linkTo={"/account"} toggleHeader={toggleHeader}>
                                <AccountCircleOutlined/>
                            </CustomDrawerButton>
                            <CustomDrawerButton buttonText={"Orders"} linkTo={"/orders"} toggleHeader={toggleHeader}>
                                <LocalOfferOutlined/>
                            </CustomDrawerButton>
                            <CustomDrawerButton buttonText={"Log Out"} linkTo={""} toggleHeader={toggleHeader}
                                                clickHandler={handleUserLogout}>
                                <LogoutOutlined/>
                            </CustomDrawerButton>
                        </>
                    }
                </StyledDrawerLinkContainerHeader>
            </StyledDrawerElementContainerHeader>
        </Drawer>
    );
}

export default MenuDrawer;