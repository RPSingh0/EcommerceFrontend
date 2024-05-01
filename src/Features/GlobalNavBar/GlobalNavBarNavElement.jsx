import {Typography} from "@mui/material";
import {parentCategoryToIconMap, toTitleCase} from "../../utilities/util.jsx";
import {NavBarElementBoxGlobalNavBar} from "./GlobalNavBarRComponents.jsx";

function GlobalNavBarNavElement({category}) {

    const categoryIcon = parentCategoryToIconMap[category];

    return (
        <NavBarElementBoxGlobalNavBar>
            {categoryIcon}
            <Typography variant={"subtitle2"} noWrap>
                {toTitleCase(category)}
            </Typography>
        </NavBarElementBoxGlobalNavBar>
    );
}

export default GlobalNavBarNavElement;