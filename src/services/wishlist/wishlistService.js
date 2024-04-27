import axios from "axios";

const URL = 'http://localhost:3000/api/v1/user';

export async function updateWishlistService({identifier, token}) {

    let {status, data} = await axios.post(`${URL}/updateWishlist`, {
        identifier: identifier,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to update wishlist...');
    }

    return data;
}

export async function getWishlistItemsService(token) {

    let {status, data} = await axios.get(`${URL}/getItemDetailsInWishlist`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 200) {
        throw new Error('Unable to get item details...');
    }

    return data;
}

export async function deleteWishlistItemService({identifier, token}) {
    let {status, data} = await axios.post(`${URL}/deleteItemWishlist`, {
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

export async function clearWishlistService(token) {
    let {status, data} = await axios.post(`${URL}/clearWishlist`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to clear cart...');
    }

    return data;
}