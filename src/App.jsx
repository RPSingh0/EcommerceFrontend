import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import BestOfSubCategory from "./Features/Dashboard/BestOfSubCategory.jsx";
import PageNotFound from "./Features/404NotFound/PageNotFound.jsx";
import SingleSubCategoryByParentContainer from "./Features/Dashboard/SingleSubCategory.jsx";
import SubCategoryProductDashboard from "./Features/SubCategoryProductDashboard/SubCategoryProductDashboard.jsx";
import SingleProduct from "./Features/Product/ProductData/SingleProduct.jsx";
import Signup from "./Features/Authentication/Signup.jsx";
import Login from "./Features/Authentication/Login.jsx";
import {Toaster} from "react-hot-toast";
import Cart from "./Features/cart/Cart.jsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {CartContextProvider} from "./Contexts/CartContext.jsx";
import Wishlist from "./Features/wishlist/Wishlist.jsx";
import {WishlistContextProvider} from "./Contexts/WishlistContext.jsx";
import Account from "./Features/Account/Account.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0
        }
    }
})

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace={true} to={"home"}/>}/>
                        <Route path={"home"}>
                            <Route path={""} element={<BestOfSubCategory/>}/>
                            <Route path={"by/parent/:category"}>
                                <Route path={""} element={<SingleSubCategoryByParentContainer/>}/>
                                <Route path={":subCategory"}>
                                    <Route path={""} element={<SubCategoryProductDashboard/>}/>
                                    <Route path={":productId"} element={<SingleProduct/>}/>
                                </Route>
                            </Route>
                        </Route>
                        <Route path={"signup"} element={<Signup/>}/>
                        <Route path={"login"} element={<Login/>}/>
                        <Route path={"account"} element={
                            <CartContextProvider>
                                <WishlistContextProvider>
                                    <Account/>
                                </WishlistContextProvider>
                            </CartContextProvider>
                        }/>
                        <Route path={"cart"} element={
                            <CartContextProvider>
                                <Cart/>
                            </CartContextProvider>
                        }/>
                        <Route path={"wishlist"} element={
                            <WishlistContextProvider>
                                <Wishlist/>
                            </WishlistContextProvider>
                        }/>
                        <Route path={"*"} element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster position={"botton-center"} gutter={12} containerStyle={{margin: '8px'}} toastOptions={{
                success: {
                    duration: 3000,
                },
                error: {
                    duration: 3000,
                },
                style: {
                    fontSize: '16px',
                }
            }}/>
        </QueryClientProvider>
    )
}