import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {getAuthToken} from "../../services/user/authStatusSlice.js";
import {useCreateReview} from "./useCreateReview.js";
import toast from "react-hot-toast";
import {
    StyledEditReviewDialogTitleProductReview,
    StyledEditReviewFormProductReview
} from "../Product/ProductReview/ProductReviewRComponents.jsx";
import {Button, Dialog, DialogContent, IconButton} from "@mui/material";
import {CloseOutlined} from "@mui/icons-material";
import {InputRating, MultilineTextFieldWithController} from "../Forms/FormFields.jsx";

function CreateOrderReview({item, isFormOpen, closeForm}) {
    const {control, handleSubmit, formState: {errors}} = useForm();
    const token = useSelector(getAuthToken);
    const {isCreating, createReview} = useCreateReview();

    function onSubmit(data) {
        const {review, rating} = data;
        const productId = item.productId;

        createReview({
            productId: productId,
            review: review,
            rating: Number(rating),
            token: token
        }, {
            onSuccess: () => {
                toast.success("Review Updated");
                closeForm();
            }
        });
    }

    return (
        <Dialog
            open={isFormOpen}
            onClose={closeForm}
            sx={{backdropFilter: "blur(5px)"}}
        >
            <StyledEditReviewDialogTitleProductReview>
                Edit Review
                <IconButton onClick={closeForm}>
                    <CloseOutlined/>
                </IconButton>
            </StyledEditReviewDialogTitleProductReview>
            <DialogContent>
                <StyledEditReviewFormProductReview component={"form"} onSubmit={handleSubmit(onSubmit)}>
                    <InputRating
                        control={control}
                        name={"rating"}
                        id={"rating"}
                        disabled={isCreating}
                    />
                    <MultilineTextFieldWithController
                        control={control}
                        id={"review"}
                        name={"review"}
                        label={"Review"}
                        rows={4}
                        disabled={isCreating}
                        requiredMessage={"Please provide a review"}
                        error={!!errors.review}
                        helperText={errors.review?.message}
                    />
                    <Button variant={"outlined"} type={"submit"} disabled={isCreating}>
                        Add Review
                    </Button>
                </StyledEditReviewFormProductReview>
            </DialogContent>
        </Dialog>
    );
}

export default CreateOrderReview;