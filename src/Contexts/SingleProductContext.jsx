import {createContext, useContext} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getProductByProductId} from "../services/product/productService.js";

const SingleProductContext = createContext();

function SingleProductContextProvider({children}) {

    const {productId} = useParams();

    const {isLoading, data, error} = useQuery({
        queryKey: [`product-${productId}`],
        queryFn: () => getProductByProductId(productId)
    });

    return (
        <SingleProductContext.Provider value={{
            isLoading,
            data,
            error
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