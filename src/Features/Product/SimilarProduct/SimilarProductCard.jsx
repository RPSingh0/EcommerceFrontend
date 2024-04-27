import {Box, Card, CardContent, CardMedia, styled, Typography} from "@mui/material";
import {NavLink, useLocation} from "react-router-dom";
import {Star} from "@mui/icons-material";
import {green} from "@mui/material/colors";
import {getRoundedValueWithPointFivePrecision} from "../../../utilities/utilities.js";

const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 1rem 0 1rem",
    minWidth: "20rem",
    maxWidth: "20rem"
}));

const StyledCardContentBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
}));

const StyledNavLink = styled(NavLink)(() => ({
    textDecoration: "none",
    color: "inherit"
}));

const StyledRatingContainer = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.1rem 0.2rem",
    backgroundColor: green["500"],
    borderRadius: theme.shape.borderRadius,
    color: "white"
}));


function ProductBySubCategoryCardPrice({price}) {
    return (
        <Typography variant={"body1"}>
            &#x20B9;{price} /-
        </Typography>
    );
}

function ProductBySubCategoryCardName({name}) {
    return (
        <Typography variant="body1" component="div">
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

function RatingContainer({rating, totalRatings}) {
    return (
        <Box sx={{display: "flex", flexDirection: "row", gap: "0.5rem", alignItems: "center"}}>
            <StyledRatingContainer>
                <Star sx={{color: "yellow"}} fontSize={"small"}/>
                <Typography variant={"caption"}>
                    {rating}
                </Typography>
            </StyledRatingContainer>
            <Typography variant={"caption"}>
                {totalRatings} ratings
            </Typography>
        </Box>
    );
}

function SimilarProductCard({item}) {

    const {pathname: singleProductLink} = useLocation();

    return (
        <StyledCard>
            <SimilarProductCardMedia image={item.coverImage} alt={`${item.name} image`}/>
            <StyledCardContentBox>
                <StyledNavLink to={`${singleProductLink}/${item._id}`}>
                    <CardContent sx={{display: "flex", flexDirection: "column", gap: "0.6rem"}}>
                        <ProductBySubCategoryCardName name={item.name}/>
                        <RatingContainer rating={getRoundedValueWithPointFivePrecision(item.averageRating)}
                                         totalRatings={item.numRatings}/>
                        <ProductBySubCategoryCardPrice price={item.price}/>
                    </CardContent>
                </StyledNavLink>

            </StyledCardContentBox>
        </StyledCard>
    );
}

export default SimilarProductCard;