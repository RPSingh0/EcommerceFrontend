import {Button, Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";
import {InputRating, MultilineTextFieldWithController} from "../../Forms/FormFields.jsx";
import {useForm} from "react-hook-form";
import {useUpdateReview} from "./useUpdateReview.js";
import {useSelector} from "react-redux";
import {getAuthToken} from "../../../services/user/authStatusSlice.js";
import toast from "react-hot-toast";
import {
    StyledEditReviewDialogTitleProductReview,
    StyledEditReviewFormProductReview
} from "./ProductReviewRComponents.jsx";

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
            }
        });
    }

    return (
        <Dialog
            open={isOpen}
            onClose={closeModal}
            sx={{backdropFilter: "blur(5px)"}}
        >
            <StyledEditReviewDialogTitleProductReview>
                Edit Review
                <IconButton onClick={closeModal}>
                    <CloseOutlined/>
                </IconButton>
            </StyledEditReviewDialogTitleProductReview>
            <DialogContent>
                <StyledEditReviewFormProductReview component={"form"} onSubmit={handleSubmit(onSubmit)}>
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
                </StyledEditReviewFormProductReview>
            </DialogContent>
        </Dialog>
    );
}

export default EditProductReview;