import axios from "axios";

const URL = 'http://localhost:3000/api/v1/user';

export async function signupUserService({
    firstName, lastName, email, password, confirmPassword, address, mobileNumber, userImage
}) {
    let {status, data} = await axios.post(`${URL}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        address: address,
        mobile: mobileNumber,
        userImage: userImage
    });

    if (status !== 201) {
        throw new Error('Unable to create account...');
    }

    return data
}

export async function loginUserService({
    email, password
}) {
    let {status, data} = await axios.post(`${URL}/login`, {
        email: email,
        password: password
    });

    return data;

    if (status !== 200) {
        console.log(data);
        throw new Error('Unable to login...');
    }

    return data;
}

export async function loginUserWithTokenService({
    email, token
}) {
    let {status, data} = await axios.post(`${URL}/login/byToken`, {
        email: email
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 200) {
        throw new Error('Unable to login...');
    }

    return data;
}

export async function updateUserInfoService({
    firstName, lastName, address, mobileNumber, token
}) {
    let {status, data} = await axios.patch(`${URL}/updateMe`, {
        firstName: firstName,
        lastName: lastName,
        address: address,
        mobile: mobileNumber,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (status !== 201) {
        throw new Error('Unable to create account...');
    }

    return data
}