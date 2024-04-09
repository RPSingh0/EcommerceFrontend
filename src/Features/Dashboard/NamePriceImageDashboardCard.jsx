import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";
import {NavLink} from "react-router-dom";

function NamePriceImageDashboardCard({parentCategory, data}) {

    return (
        <NavLink to={`/home/by/parent/${parentCategory}/${data.name}`} style={{textDecoration: "none"}}>
            <Card sx={{minWidth: "150px", maxWidth: "150px"}}>
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
            </Card>
        </NavLink>
    );
}

export default NamePriceImageDashboardCard;