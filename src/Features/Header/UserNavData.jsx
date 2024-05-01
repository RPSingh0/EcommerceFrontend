import HeaderCart from "./HeaderCart.jsx";
import HeaderUser from "./HeaderUser.jsx";
import HeaderWishlist from "./HeaderWishlist.jsx";
import {StyledUserCartWishlistContainerHeader} from "./HeaderRComponents.jsx";

function UserNavData() {
    return (
        <StyledUserCartWishlistContainerHeader>
            <HeaderWishlist/>
            <HeaderCart/>
            <HeaderUser/>
        </StyledUserCartWishlistContainerHeader>
    );
}

export default UserNavData;