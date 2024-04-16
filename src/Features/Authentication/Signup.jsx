import {Avatar, Box, Button, styled, Typography} from "@mui/material";
import {blue, purple} from "@mui/material/colors";
import {LockOutlined} from "@mui/icons-material";
import {MultilineTextFieldWithController, TextFieldWithController} from "../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {StyledSignupLoginBox} from "../Ui/RStyledComponents.jsx";
import {NavLink} from "react-router-dom";

const StyledAvatarAndDescBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledSignupForm = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    [theme.breakpoints.down("sm")]: {
        width: "80%"
    },

    [theme.breakpoints.up("sm")]: {
        width: "60%"
    },

    [theme.breakpoints.up("md")]: {
        width: "50%"
    },

    [theme.breakpoints.up("lg")]: {
        width: "30%"
    }
}));

function Signup() {

    const {control, handleSubmit, reset, formState: {errors}} = useForm();

    function onSubmit() {

    }

    function onError() {

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
            <StyledSignupForm component={"form"} onSubmit={handleSubmit(onSubmit, onError)}>
                <Box sx={{display: "flex", flexDirection: "row", gap: "1rem", width: "100%"}}>
                    <TextFieldWithController
                        control={control}
                        id={"firstName"}
                        name={"firstName"}
                        label={"First Name"}
                        defaultValue={""}
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
                        requiredMessage={"Please provide a user last name"}
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />
                </Box>
                <TextFieldWithController
                    control={control}
                    id={"email"}
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    defaultValue={""}
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
                    requiredMessage={"Please enter your message"}
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
                    requiredMessage={"Please enter your phone number"}
                    error={!!errors.mobileNumber}
                    helperText={errors.mobileNumber?.message}
                />
                <Button variant={"contained"}>
                    Create Account
                </Button>
                <NavLink to={"/signup"} style={{textDecoration: "none", textAlign: "end"}}>
                    <Typography variant={"caption"}>
                        Already have an account? Sign in here!
                    </Typography>
                </NavLink>
            </StyledSignupForm>
        </StyledSignupLoginBox>
    )
}

export default Signup;