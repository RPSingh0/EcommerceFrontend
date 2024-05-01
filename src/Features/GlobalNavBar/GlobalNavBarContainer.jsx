import {useQuery} from "@tanstack/react-query";
import {getAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import GlobalNavBarNavElement from "./GlobalNavBarNavElement.jsx";
import React from 'react';
import {
    CustomNavLinkForGlobalNavBar,
    FullWidthLinearProgress,
    StyledNavBarElementContainerGlobalNavBar,
    VerticalDividerFlex
} from "./GlobalNavBarRComponents.jsx";


function GlobalNavBarContainer() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentCategories"],
        queryFn: getAllParentCategory
    })

    return (
        <StyledNavBarElementContainerGlobalNavBar>
            {isLoading && <FullWidthLinearProgress/>}
            {!isLoading && !error && data.data.parentCategories.map(item =>
                <React.Fragment key={item.name}>
                    <CustomNavLinkForGlobalNavBar link={`/home/by/parent/${item.name}`}>
                        <GlobalNavBarNavElement category={item.name}/>
                    </CustomNavLinkForGlobalNavBar>
                    <VerticalDividerFlex/>
                </React.Fragment>
            )}
        </StyledNavBarElementContainerGlobalNavBar>
    );
}

export default GlobalNavBarContainer;