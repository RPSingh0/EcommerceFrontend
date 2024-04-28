import {Button, Dialog, DialogContent, IconButton} from "@mui/material";
import {MultilineTextFieldWithController, TextFieldWithController} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {getUserDetails} from "../../services/user/userSlice.js";
import {useUpdateUser} from "./useUpdateUser.js";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";
import {CloseOutlined} from "@mui/icons-material";
import {StyledDialogTitleAccount, StyledEditUserFormAccount, StyledFirstLastNameBoxAccount} from "./AccountRComponents.jsx";


function EditUserDetails({isEditModalOpen, setIsEditModalOpen}) {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const {isCreating, updateUser} = useUpdateUser();
    const token = useSelector(getAuthToken);
    const user = useSelector(getUserDetails);

    function handleCloseEditForm() {
        setIsEditModalOpen(false);
    }

    function onSubmit(data) {
        const updatingUserToast = toast.loading("Just a moment...");
        updateUser({
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            mobileNumber: data.mobileNumber,
            token: token
        }, {
            onSuccess: () => {
                toast.dismiss(updatingUserToast);
                toast.success("Details Updated");
                handleCloseEditForm();
            },
            onSettled: () => {
                toast.dismiss(updatingUserToast);
            }
        })
    }

    return (
        <Dialog open={isEditModalOpen} onClose={handleCloseEditForm} sx={{backdropFilter: "blur(5px)"}}>
            <StyledDialogTitleAccount>
                Edit Info
                <IconButton onClick={handleCloseEditForm}>
                    <CloseOutlined/>
                </IconButton>
            </StyledDialogTitleAccount>
            <DialogContent>
                <StyledEditUserFormAccount component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <StyledFirstLastNameBoxAccount>
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
                    </StyledFirstLastNameBoxAccount>
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
                    <Button variant={"contained"} type={"submit"}>
                        Update
                    </Button>
                </StyledEditUserFormAccount>
            </DialogContent>
        </Dialog>
    );
}

export default EditUserDetails;