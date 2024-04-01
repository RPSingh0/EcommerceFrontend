import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";

function CardWithImageAndDescriptionOnly({data}) {
    return (
        <Box>
            <Card sx={{minWidth: "150px"}}>
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
        </Box>
    );
}

export default CardWithImageAndDescriptionOnly;