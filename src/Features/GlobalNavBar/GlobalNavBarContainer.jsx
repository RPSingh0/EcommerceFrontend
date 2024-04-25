import {useQuery} from "@tanstack/react-query";
import {getAllParentCategory} from "../../services/parent-category/parentCategoryService.js";
import GlobalNavBarNavElement from "./GlobalNavBarNavElement.jsx";
import {Box, Divider, styled} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import React from 'react';

const StyledParentCategoryContainerBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "1rem",
    overflow: "auto",
    "&::-webkit-scrollbar": {
        display: "none"
    },
    "hr:last-of-type": {
        display: "none"
    },

    "& a": {
        color: "#333"
    },

    "& a.active": {
        backgroundColor: "#1976d2",
        borderRadius: "9px",
        color: "#f5f5f5 !important"
    }
}));

function GlobalNavBarContainer() {

    const {isLoading, data, error} = useQuery({
        queryKey: ["parentCategories"],
        queryFn: getAllParentCategory
    })

    return (
        <StyledParentCategoryContainerBox>
            {!isLoading && !error && data.data.parentCategories.map(item =>
                <React.Fragment key={item.name}>
                    <NavLink to={`/home/by/parent/${item.name}`} style={{textDecoration: "none", padding: "0.2rem 0.4rem"}}>
                        <GlobalNavBarNavElement category={item.name}/>
                    </NavLink>
                    <Divider orientation={"vertical"} flexItem/>
                </React.Fragment>
            )}
        </StyledParentCategoryContainerBox>
    );
}

export default GlobalNavBarContainer;