import {Avatar, Button, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import {LockOutlined} from "@mui/icons-material";
import {
    InputFileUploadSingleImage,
    MultilineTextFieldWithController,
    TextFieldWithController
} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {v4} from "uuid";
import {uploadImageAndGetDownloadUrl} from "../../services/firebase/imgageUploadService.js";
import {useCreateUser} from "./useCreateUser.js";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {isUserLoggedIn} from "../../services/user/userSlice.js";
import {
    StyledAvatarAndDescBox,
    StyledFirstLastNameBoxAccount,
    StyledSignupLoginBox,
    StyledSignupLoginForm
} from "./AuthenticationRComponents.jsx";

function Signup() {

    const {control, handleSubmit, reset, formState: {errors}} = useForm();
    const isLoggedIn = useSelector(isUserLoggedIn);
    const navigate = useNavigate();
    const [userImage, setUserImage] = useState("");
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const {isCreating, createUser} = useCreateUser();
    const shouldDisable = isUploadingImage || isCreating;

    useEffect(function () {
        if (isLoggedIn) {
            navigate("/account", {replace: true});
        }
    }, [isLoggedIn, navigate]);

    async function onSubmit(data) {

        let userImageUrl = null;

        if (data.userImage) {
            setIsUploadingImage(true);
            const uploadingImageToast = toast.loading("Uploading Image...");
            try {
                const path = v4();
                userImageUrl = await uploadImageAndGetDownloadUrl('user', `${path}-${data.firstName}/profile`, userImage);
                toast.dismiss(uploadingImageToast);
                toast.success("Image uploaded successfully");
            } catch {
                toast.error("Image upload failed!")
            } finally {
                setIsUploadingImage(false);
            }
        }

        const signingUpToast = toast.loading("Just a moment...");

        createUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            address: data.address,
            mobileNumber: data.mobileNumber,
            userImage: userImageUrl?.[0]
        }, {
            onSuccess: () => {
                setUserImage("");
                reset();
                navigate("/")
            },
            onSettled: () => {
                toast.dismiss(signingUpToast);
                toast.success("Welcome")
            }
        })
    }

    return (
        <StyledSignupLoginBox>
            <StyledAvatarAndDescBox>
                <Avatar sx={{bgcolor: blue[700]}}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant={"h6"}>
                    Sign Up
                </Typography>
            </StyledAvatarAndDescBox>
            <StyledSignupLoginForm component={"form"} onSubmit={handleSubmit(onSubmit)}>
                <StyledFirstLastNameBoxAccount>
                    <TextFieldWithController
                        control={control}
                        id={"firstName"}
                        name={"firstName"}
                        label={"First Name"}
                        defaultValue={""}
                        disabled={shouldDisable}
                        requiredMessage={"Please provide a user first name"}
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />
                    <TextFieldWithController
                        control={control}
                        id={"lastName"}
                        name={"lastName"}
                        label={"Last Name"}
                        defaultValue={""}
                        disabled={shouldDisable}
                        required={false}
                        requiredMessage={"Please provide a user last name"}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </StyledFirstLastNameBoxAccount>
                <TextFieldWithController
                    control={control}
                    id={"email"}
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    defaultValue={""}
                    disabled={shouldDisable}
                    requiredMessage={"Please provide a user email"}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextFieldWithController
                    control={control}
                    id={"password"}
                    name={"password"}
                    label={"Password"}
                    type={"password"}
                    defaultValue={""}
                    disabled={shouldDisable}
                    requiredMessage={"Please provide a user password"}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
                <TextFieldWithController
                    control={control}
                    id={"confirmPassword"}
                    name={"confirmPassword"}
                    label={"Confirm Password"}
                    type={"password"}
                    defaultValue={""}
                    disabled={shouldDisable}
                    requiredMessage={"Please confirm your password"}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
                <MultilineTextFieldWithController
                    control={control}
                    id={"address"}
                    name={"address"}
                    label={"Address"}
                    rows={4}
                    defaultValue={""}
                    disabled={shouldDisable}
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
                    defaultValue={""}
                    disabled={shouldDisable}
                    requiredMessage={"Please enter your phone number"}
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber?.message}
                />
                <InputFileUploadSingleImage
                    control={control}
                    id={"userImage"}
                    name={"userImage"}
                    label={"Profile Picture"}
                    image={userImage}
                    setImage={setUserImage}
                    disabled={shouldDisable}
                    error={!!errors.userImage}
                    helperText={errors.userImage?.message}
                />
                <Button variant={"contained"} type={"submit"} disabled={shouldDisable}>
                    Create Account
                </Button>
                <NavLink to={"/login"} style={{textDecoration: "none", textAlign: "end"}}>
                    <Typography variant={"caption"}>
                        Already have an account? Sign in here!
                    </Typography>
                </NavLink>
            </StyledSignupLoginForm>
        </StyledSignupLoginBox>
    )
}

export default Signup;