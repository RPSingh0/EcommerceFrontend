import {CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import {CustomNavLink, StyledBestOfSubCategoryCardDashboard} from "./DashboardRComponents.jsx";

function BestOfSubCategoryCard({parentCategory, data}) {

    return (
        <CustomNavLink link={`/home/by/parent/${parentCategory}/${data.name}`}>
            <StyledBestOfSubCategoryCardDashboard>
                <CardActionArea>
                    <CardMedia
                        component={"img"}
                        height={"100"}
                        image={data.coverImage}
                        alt={`${data.name} cover image`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant={"subtitle1"} noWrap>
                            {toTitleCase(data.name)}
                        </Typography>
                        <Typography variant={"body"} color={"text.secondary"}>
                            from $99
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </StyledBestOfSubCategoryCardDashboard>
        </CustomNavLink>
    );
}

export default BestOfSubCategoryCard;