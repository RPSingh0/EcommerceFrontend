import {Box, Card, CardActions, CardContent, CardMedia, Rating, styled, Tooltip, Typography, Zoom} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
    minWidth: "max-content"
}));

const StyledCardContentBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
}));

const StyledCardActions = styled(CardActions)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}));

const StyledNavLink = styled(NavLink)(() => ({
    textDecoration: "none",
    color: "inherit"
}));

function ProductBySubCategoryCardRating() {

    const rating = Math.round(5 * Math.random());

    return (
        <Tooltip TransitionComponent={Zoom} title={`Overall: ${rating} / 5`}>
            <Box>
                <Rating name="read-only" value={rating} precision={0.5}
                        readOnly/>
            </Box>
        </Tooltip>
    );
}

function ProductBySubCategoryCardPrice({price}) {
    return (
        <Typography variant={"h6"}>
            {price}
        </Typography>
    );
}

function ProductBySubCategoryCardName({name}) {
    return (
        <Typography variant="subtitle1" component="div">
            {name}
        </Typography>
    );
}

function SimilarProductCardMedia({image, alt}) {
    return (
        <CardMedia
            component={"img"}
            sx={{height: 150, objectFit: "contain"}}
            image={image}
            title={alt}
        />
    );
}

function SimilarProductCard({item}) {

    const {pathname: singleProductLink} = useLocation();

    return (
        <StyledCard>
            <SimilarProductCardMedia image={item.coverImage} alt={`${item.name} image`}/>
            <StyledCardContentBox>
                <StyledNavLink to={`${singleProductLink}/${item._id}`}>
                    <CardContent>
                        <ProductBySubCategoryCardName name={item.name}/>
                        <ProductBySubCategoryCardPrice price={item.price}/>
                    </CardContent>
                </StyledNavLink>
                <StyledCardActions>
                    <ProductBySubCategoryCardRating/>
                </StyledCardActions>
            </StyledCardContentBox>
        </StyledCard>
    );
}

export default SimilarProductCard;