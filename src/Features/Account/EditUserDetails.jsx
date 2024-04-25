import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled} from "@mui/material";
import {
    InputFileUploadSingleImage,
    MultilineTextFieldWithController,
    TextFieldWithController
} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {useCreateUser} from "../Authentication/useCreateUser.js";
import {useSelector} from "react-redux";
import {getUserDetails} from "../../services/user/userSlice.js";
import {useUpdateUser} from "./useUpdateUser.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";
import {CloseOutlined} from "@mui/icons-material";

const StyledSignupForm = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    // [theme.breakpoints.down("sm")]: {
    //     width: "80%"
    // },
    //
    // [theme.breakpoints.up("sm")]: {
    //     width: "60%"
    // },
    //
    // [theme.breakpoints.up("md")]: {
    //     width: "50%"
    // },
    //
    // [theme.breakpoints.up("lg")]: {
    //     width: "30%"
    // }
}));

function EditUserDetails({isEditModalOpen, setIsEditModalOpen}) {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const {isCreating, updateUser} = useUpdateUser();
    const token = useSelector(getAuthToken);
    const user = useSelector(getUserDetails);

    function handleCloseEditForm() {
        setIsEditModalOpen(false);
    }

    function onSubmit(data) {
        updateUser({
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            mobileNumber: data.mobileNumber,
            token: token
        }, {
            onSuccess: () => {
                toast.success("Details Updated");
                handleCloseEditForm();
            },
            onError: (error) => {
                console.log(error);
            }
        })
    }

    function onError() {

    }

    return (
        <Dialog
            open={isEditModalOpen}
            onClose={handleCloseEditForm}
            sx={{backdropFilter: "blur(5px)"}}
        >
            <DialogTitle sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                Edit Info
                <IconButton onClick={handleCloseEditForm}>
                    <CloseOutlined/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <StyledSignupForm component={"form"} onSubmit={handleSubmit(onSubmit, onError)}
                                  sx={{padding: "0.5rem 0"}} id={"user-update-form"}>
                    <Box sx={{display: "flex", flexDirection: "row", gap: "1rem", width: "100%"}}>
                        <TextFieldWithController
                            control={control}
                            id={"firstName"}
                            name={"firstName"}
                            label={"First Name"}
                            defaultValue={user.firstName}
                            disabled={isCreating}
                            requiredMessage={"Please provide a user first name"}
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                        <TextFieldWithController
                            control={control}
                            id={"lastName"}
                            name={"lastName"}
                            label={"Last Name"}
                            defaultValue={user.lastName}
                            disabled={isCreating}
                            required={false}
                            requiredMessage={"Please provide a user last name"}
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    </Box>
                    <MultilineTextFieldWithController
                        control={control}
                        id={"address"}
                        name={"address"}
                        label={"Address"}
                        rows={4}
                        defaultValue={user.address}
                        disabled={isCreating}
                        requiredMessage={"Please enter your address"}
                        error={!!errors.address}
                        helperText={errors.address?.message}
                    />
                    <TextFieldWithController
                        control={control}
                        id={"mobileNumber"}
                        name={"mobileNumber"}
                        label={"Phone Number"}
                        type={"mobileNumber"}
                        defaultValue={user.mobile}
                        disabled={isCreating}
                        requiredMessage={"Please enter your phone number"}
                        error={!!errors.mobileNumber}
                        helperText={errors.mobileNumber?.message}
                    />
                    <Button variant={"outlined"} type={"submit"} htmlFor={"user-update-form"}>
                        Update
                    </Button>
                </StyledSignupForm>
            </DialogContent>
        </Dialog>
    );
}

export default EditUserDetails;