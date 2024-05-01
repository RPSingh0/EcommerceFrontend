import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateReviewService} from "../../../services/review/reviewService.js";
import toast from "react-hot-toast";

export function useUpdateReview() {
    const queryClient = useQueryClient();

    const {mutate: updateReview, isPending: isUpdating} = useMutation({
        mutationFn: updateReviewService,
        onSettled: (data, error) => {
            if (error) {
                toast.error(error.response.data.message);
            } else {
                queryClient.invalidateQueries(['reviews'])
            }
        }
    });

    return {isUpdating, updateReview}
}