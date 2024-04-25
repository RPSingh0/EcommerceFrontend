import {Chair, Checkroom, Dvr, Fastfood, Hiking, Home, MenuBook, Spa, Toys} from "@mui/icons-material";

export const parentCategoryToIconMap = {
    'electronics': <Dvr/>,
    'home and decor': <Home/>,
    'healthcare': <Spa/>,
    'books': <MenuBook/>,
    'travel': <Hiking/>,
    'grocery': <Fastfood/>,
    'furniture': <Chair/>,
    'toys': <Toys/>,
    'fashion': <Checkroom/>
}

export function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

export function getFormattedDate(string) {
    const date = new Date(string);

    return date.toLocaleString('default', {month: 'short', year: 'numeric', day: 'numeric'})
}