import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout.jsx";
import SubCategoryByParentContainer from "./Features/Dashboard/SubCategoryByParentContainer.jsx";
import PageNotFound from "./Features/404NotFound/PageNotFound.jsx";
import SingleSubCategoryByParentContainer from "./Features/Dashboard/SingleSubCategoryByParentContainer.jsx";

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
                        <Route index element={<Navigate replace={true} to={"/home"}/>}/>
                        <Route path={"/home"} element={<SubCategoryByParentContainer/>}/>
                        <Route path={"/by/parent/:category"} element={<SingleSubCategoryByParentContainer/>}/>
                        <Route path={"*"} element={<PageNotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}