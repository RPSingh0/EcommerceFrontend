import {StyledProductsContainer} from "../Ui/RStyledComponents.jsx";
import {Divider} from "@mui/material";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import EditUserDetails from "./EditUserDetails.jsx";
import AccountCartInfo from "./AccountCartInfo.jsx";
import AccountWishlistInfo from "./AccountWishlistInfo.jsx";
import AccountImage from "./AccountImage.jsx";
import AccountInfo from "./AccountInfo.jsx";
import {StyledFlexColumnOneGapBoxAccount, StyledUserInfoAccount} from "./AccountRComponents.jsx";


function Account() {

    const isLoggedIn = useSelector(isUserLoggedIn);
    const navigate = useNavigate();
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
                <StyledFlexColumnOneGapBoxAccount>
                    <StyledUserInfoAccount>
                        <AccountImage handleEditModal={handleEditModal}/>
                        <AccountInfo/>
                    </StyledUserInfoAccount>
                    <Divider/>
                    <AccountCartInfo/>
                    <Divider/>
                    <AccountWishlistInfo/>
                    {isEditModalOpen &&
                        <EditUserDetails isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen}/>}
                </StyledFlexColumnOneGapBoxAccount>
            }
        </StyledProductsContainer>
    );
}

export default Account;