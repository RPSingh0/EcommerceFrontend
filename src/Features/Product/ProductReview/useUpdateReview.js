import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateReviewService} from "../../../services/review/reviewService.js";

export function useUpdateReview() {
    const queryClient = useQueryClient();

    const {mutate: updateReview, isPending: isUpdating} = useMutation({
        mutationFn: updateReviewService,
        onSuccess: () => {
            queryClient.invalidateQueries(['reviews'])
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return {isUpdating, updateReview}
}