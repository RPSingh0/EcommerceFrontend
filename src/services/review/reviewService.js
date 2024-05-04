import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/review`;

export async function createReviewService({productId, review, rating, token}) {

    let {data} = await axios.post(`${URL}/create`, {
        productId: productId,
        review: review,
        rating: rating
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export async function updateReviewService({productId, review, rating, token}) {

    let {data} = await axios.patch(`${URL}/update`, {
        productId: productId,
        review: review,
        rating: rating
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export async function getReviewsForProductService(productId) {

    let {status, data} = await axios.get(`${URL}/get/${productId}`);

    if (status !== 200) {
        throw new Error('Unable to get reviews for product...');
    }

    return data;
}

export async function deleteReviewService({productId, token}) {
    let {data} = await axios.post(`${URL}/delete`, {
        productId: productId
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}
