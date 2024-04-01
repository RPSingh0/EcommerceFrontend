import CardWithImageAndDescriptionOnly from "../product-cards/CardWithImageAndDescriptionOnly.jsx";

function ParentSubCategoryGrid({categoryKey, categoryValue}) {

    console.log(categoryKey, categoryValue);

    return (
        <>
            {categoryValue.subCategories.map(category => <CardWithImageAndDescriptionOnly
                key={`${categoryKey}-${category.name}`} data={category}/>)}
        </>
    );
}

export default ParentSubCategoryGrid;