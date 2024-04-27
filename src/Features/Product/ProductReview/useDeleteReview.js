import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteReviewService} from "../../../services/review/reviewService.js";

export function useDeleteReview() {
    const queryClient = useQueryClient();

    const {mutate: deleteReview, isPending: isDeleting} = useMutation({
        mutationFn: deleteReviewService,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['reviews']});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isDeleting, deleteReview};
}