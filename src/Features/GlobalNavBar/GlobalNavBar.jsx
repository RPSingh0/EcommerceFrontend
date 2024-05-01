import GlobalNavBarContainer from "./GlobalNavBarContainer.jsx";
import {StyledParentCategoryNavBarContainerGlobalNavBar} from "./GlobalNavBarRComponents.jsx";

function GlobalNavBar() {
    return (
        <StyledParentCategoryNavBarContainerGlobalNavBar>
            <GlobalNavBarContainer/>
        </StyledParentCategoryNavBarContainerGlobalNavBar>
    );
}

export default GlobalNavBar;