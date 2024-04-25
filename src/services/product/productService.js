import axios from "axios";

// const URL = 'https://e18d-150-107-93-80.ngrok-free.app/api/v1/product/bySubCategory';
const URL = 'http://192.168.247.206:3000/api/v1/product/';
// const URL = 'http://192.168.130.13:3000/api/v1/product/';

// const URL = 'https://3550-150-107-93-11.ngrok-free.app/api/v1/parentCategory';

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