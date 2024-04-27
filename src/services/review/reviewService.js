import axios from "axios";

const URL = 'http://localhost:3000/api/v1/review';

export async function updateCartService({identifier, quantity, token}) {

    let {status, data} = await axios.post(`${URL}/updateCart`, {
        identifier: identifier,
        quantity: quantity
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to update cart...');
    }

    return data;
}

export async function getReviewsForProductService(productId) {

    let {status, data} = await axios.get(`${URL}/get/${productId}`);

    if (status !== 200) {
        throw new Error('Unable to get reviews for product...');
    }

    return data;
}

export async function deleteCartItemService({identifier, token}) {
    let {status, data} = await axios.post(`${URL}/deleteItem`, {
        identifier: identifier
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to delete item from cart...');
    }

    return data;
}

export async function clearCartService(token) {
    let {status, data} = await axios.post(`${URL}/clearCart`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to clear cart...');
    }

    return data;
}