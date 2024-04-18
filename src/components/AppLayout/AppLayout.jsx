import Header from "../../Features/Header/Header.jsx";
import {Box, Stack} from "@mui/material";
import GlobalNavBar from "../../Features/GlobalNavBar/GlobalNavBar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getAuthStatus} from "../../services/user/authStatusSlice.js";
import {useLoginWithToken} from "../../Features/Authentication/useLoginWithToken.js";

function AppLayout() {
    const authStatus = useSelector(getAuthStatus);
    const {loginUser} = useLoginWithToken();

    useEffect(() => {
        if (authStatus) {
            loginUser({
                email: authStatus.email,
                token: authStatus.token
            }, {
                onSuccess: () => {
                    console.log("logged in from storage");
                },
                onError: () => {
                    console.log("unable to log in, or storage data not exists");
                }
            })
        }
    }, []);

    return (
        <Box>
            <Header/>
            <Stack marginTop={2} gap={2} overflow={"auto"}>
                <GlobalNavBar/>
                <Outlet/>
            </Stack>
        </Box>
    );
}

export default AppLayout;