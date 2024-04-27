import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Rating, styled} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";
import {InputRating, MultilineTextFieldWithController} from "../../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useState} from "react";

const StyledSignupForm = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

function EditProductReview({reviewToEdit, isOpen, closeModal}) {

    const {control, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    function onError() {

    }

    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            sx={{backdropFilter: "blur(5px)"}}
        >
            <DialogTitle sx={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                Edit Review
                <IconButton onClick={closeModal}>
                    <CloseOutlined/>
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <StyledSignupForm component={"form"} onSubmit={handleSubmit(onSubmit, onError)}
                                  sx={{padding: "0.5rem 0"}} id={"user-update-form"}>
                    <InputRating
                        control={control}
                        name={"rating"}
                        id={"rating"}
                        defaultValue={String(reviewToEdit.rating)}
                    />
                    <MultilineTextFieldWithController
                        control={control}
                        id={"review"}
                        name={"review"}
                        label={"Review"}
                        rows={4}
                        defaultValue={reviewToEdit.review}
                        // disabled={isCreating}
                        requiredMessage={"Please provide a review"}
                        error={!!errors.review}
                        helperText={errors.review?.message}
                    />
                    <Button variant={"outlined"} type={"submit"}>
                        Update
                    </Button>
                </StyledSignupForm>
            </DialogContent>
        </Dialog>
    );
}

export default EditProductReview;