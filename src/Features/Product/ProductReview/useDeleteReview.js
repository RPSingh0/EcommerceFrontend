import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteReviewService} from "../../../services/review/reviewService.js";
import toast from "react-hot-toast";

export function useDeleteReview() {
    const queryClient = useQueryClient();

    const {mutate: deleteReview, isPending: isDeleting} = useMutation({
        mutationFn: deleteReviewService,
        onSettled: (data, error) => {

            if (error) {
                toast.error(error.response.data.message);
            } else {
                queryClient.invalidateQueries({queryKey: ['reviews']});
            }
        }
    });

    return {isDeleting, deleteReview};
}