import {Box, Card, CardActionArea, CardContent, CardMedia, styled, Typography} from "@mui/material";
import {toTitleCase} from "../../utilities/util.jsx";

const StyledCardMedia = styled(CardMedia)(({theme}) => ({

    [theme.breakpoints.down('sm')]: {
        minHeight: "100px",
        maxHeight: "100px"
    },

    [theme.breakpoints.up('sm')]: {
        minHeight: "120px",
        maxHeight: "120px"
    },

    [theme.breakpoints.up('md')]: {
        minHeight: "150px",
        maxHeight: "150px"
    },

    [theme.breakpoints.up('lg')]: {
        minHeight: "200px",
        maxHeight: "200px"
    },

    [theme.breakpoints.up('xl')]: {
        minHeight: "250px",
        maxHeight: "250px"
    }
}));

function ImageNamePriceSingleSubCategoryByParentCard({data}) {
    return (
        <Box>
            <CardActionArea>
                <Card>
                    <StyledCardMedia
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
        </Box>
    );
}

export default ImageNamePriceSingleSubCategoryByParentCard;