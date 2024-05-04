import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/product/`;

export async function getAllProductsBySubCategory(category) {
    let {status, data} = await axios.get(`${URL}/bySubCategory/${category}`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data
}

export async function getProductByProductId(productId) {
    let {status, data} = await axios.get(`${URL}/byId/${productId}`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data;
}