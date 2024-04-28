import {createContext, useContext} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllProductsBySubCategory, getProductByProductId} from "../services/product/productService.js";
import {getReviewsForProductService} from "../services/review/reviewService.js";

const SingleProductContext = createContext();

function SingleProductContextProvider({children}) {

    const {productId, subCategory} = useParams();

    const {isLoading: isLoadingProductDetails, data: singleProductData, error: singleProductError} = useQuery({
        queryKey: [`product-${productId}`],
        queryFn: () => getProductByProductId(productId)
    });

    const {isLoading: isLoadingSimilarProducts, data: similarProductsData, error: similarProductsError} = useQuery({
        queryKey: [`similar-${productId}`],
        queryFn: () => getAllProductsBySubCategory(subCategory)
    });

    const {isLoading: isLoadingProductReviews, data: productReviewData, error: productReviewError} = useQuery({
        queryKey: [`reviews`],
        queryFn: () => getReviewsForProductService(productId)
    })

    return (
        <SingleProductContext.Provider value={{
            isLoadingProductDetails,
            singleProductData,
            singleProductError,
            isLoadingSimilarProducts,
            similarProductsData,
            similarProductsError,
            isLoadingProductReviews,
            productReviewData,
            productReviewError
        }}>
            {children}
        </SingleProductContext.Provider>
    )
}

function useSingleProductContext() {
    const context = useContext(SingleProductContext);

    if (context === undefined) {
        throw new Error("Oops! using context outside the accessible area is not allowed ;)");
    }

    return context;
}

export {SingleProductContextProvider, useSingleProductContext};