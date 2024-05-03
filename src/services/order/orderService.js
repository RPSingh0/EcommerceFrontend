import axios from "axios";

const URL = 'http://localhost:3000/api/v1/user';

export async function purchaseCartService({transactionId, token}) {

    let {data} = await axios.get(`${URL}/purchaseCart/${transactionId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export async function getOrderByIdService(transactionId, token) {

    let {data} = await axios.get(`${URL}/order/${transactionId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (data.status === 'fail') {
        throw new Error('Failed to fetch order Info');
    }

    return data;
}

export async function getAllOrdersService(token) {
    let {data} = await axios.get(`${URL}/getAllOrders`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}