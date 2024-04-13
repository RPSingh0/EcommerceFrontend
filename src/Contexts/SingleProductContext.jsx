import {createContext, useContext} from "react";

const SingleProductContext = createContext();

function SingleProductContextProvider({children}) {

    

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