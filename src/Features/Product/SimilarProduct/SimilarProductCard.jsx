import {useParams} from "react-router-dom";
import {getRoundedValueWithPointFivePrecision} from "../../../utilities/utilities.js";
import {
    RatingReadOnlyElement,
    SimilarProductCardItemName,
    SimilarProductCardItemPrice,
    SimilarProductCardMedia,
    StyledCardContentBoxSimilarProducts,
    StyledSimilarProductCardContentSimilarProduct,
    StyledSimilarProductCardNavLinkSimilarProduct,
    StyledSimilarProductCardSimilarProducts
} from "./SimilarProductsRComponents.jsx";

function SimilarProductCard({item}) {

    const {category, subCategory} = useParams();

    return (
        <StyledSimilarProductCardSimilarProducts>
            <SimilarProductCardMedia image={item.coverImage} alt={`${item.name} image`}/>
            <StyledCardContentBoxSimilarProducts>
                <StyledSimilarProductCardNavLinkSimilarProduct
                    to={`/home/by/parent/${category}/${subCategory}/${item._id}`}>
                    <StyledSimilarProductCardContentSimilarProduct>
                        <SimilarProductCardItemName name={item.name}/>
                        <RatingReadOnlyElement rating={getRoundedValueWithPointFivePrecision(item.averageRating)}
                                               totalRatings={item.numRatings}/>
                        <SimilarProductCardItemPrice price={item.price}/>
                    </StyledSimilarProductCardContentSimilarProduct>
                </StyledSimilarProductCardNavLinkSimilarProduct>

            </StyledCardContentBoxSimilarProducts>
        </StyledSimilarProductCardSimilarProducts>
    );
}

export default SimilarProductCard;