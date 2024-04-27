import {Box, Button, Dialog, DialogContent, DialogTitle, IconButton, styled} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";
import {InputRating, MultilineTextFieldWithController} from "../../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useUpdateReview} from "./useUpdateReview.js";
import {useSelector} from "react-redux";
import {getAuthToken} from "../../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";

const StyledSignupForm = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}));

function EditProductReview({reviewToEdit, isOpen, closeModal}) {

    const {control, handleSubmit, formState: {errors}} = useForm();
    const token = useSelector(getAuthToken);
    const {isUpdating, updateReview} = useUpdateReview();

    function onSubmit(data) {
        const {review, rating} = data;
        const productId = reviewToEdit.productId;

        updateReview({
            productId: productId,
            review: review,
            rating: Number(rating),
            token: token
        }, {
            onSuccess: () => {
                toast.success("Review Updated");
                closeModal();
            },
            onError: (error) => {
                console.log(error);
            }
        });
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
                        defaultValue={reviewToEdit.rating}
                        disabled={isUpdating}
                    />
                    <MultilineTextFieldWithController
                        control={control}
                        id={"review"}
                        name={"review"}
                        label={"Review"}
                        rows={4}
                        disabled={isUpdating}
                        defaultValue={reviewToEdit.review}
                        requiredMessage={"Please provide a review"}
                        error={!!errors.review}
                        helperText={errors.review?.message}
                    />
                    <Button variant={"outlined"} type={"submit"} disabled={isUpdating}>
                        Update
                    </Button>
                </StyledSignupForm>
            </DialogContent>
        </Dialog>
    );
}

export default EditProductReview;