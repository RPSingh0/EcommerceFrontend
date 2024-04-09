import axios from "axios";

// const URL = 'https://e18d-150-107-93-80.ngrok-free.app/api/v1/product/bySubCategory';
const URL = 'http://192.168.1.5:3000/api/v1/product/bySubCategory';

// const URL = 'https://3550-150-107-93-11.ngrok-free.app/api/v1/parentCategory';

export async function getAllProductsBySubCategory(category) {
    let {status, data} = await axios.get(`${URL}/${category}`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data
}
