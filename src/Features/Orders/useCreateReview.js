import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {createReviewService} from "../../services/review/reviewService.js";

export function useCreateReview() {
    const queryClient = useQueryClient();

    const {mutate: createReview, isPending: isCreating} = useMutation({
        mutationFn: createReviewService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                queryClient.invalidateQueries([`reviews-${data.data.review.productId}`])
            }
        }
    });

    return {isCreating, createReview}
}