import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import {useLocation} from "react-router-dom";
import {CustomNavLink, StyledSubCategoryCardMediaDashboard} from "./DashboardRComponents.jsx";

function SubCategoryCard({data}) {

    const {pathname} = useLocation();

    return (
        <CustomNavLink link={`${pathname}/${data.name}`}>
            <CardActionArea>
                <Card>
                    <StyledSubCategoryCardMediaDashboard
                        component={"img"}
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
                </Card>
            </CardActionArea>
        </CustomNavLink>
    );
}

export default SubCategoryCard;