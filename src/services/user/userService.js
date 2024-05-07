import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/user`;

export async function signupUserService({
    firstName, lastName, email, password, confirmPassword, address, mobileNumber, userImage
}) {
    let {data} = await axios.post(`${URL}/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
        address: address,
        mobile: mobileNumber,
        userImage: userImage
    });

    return data;
}

export async function loginUserService({
    email, password
}) {
    let {data} = await axios.post(`${URL}/login`, {
        email: email,
        password: password
    });

    return data;
}

export async function loginUserWithTokenService({
    email, token
}) {
    let {data} = await axios.post(`${URL}/login/byToken`, {
        email: email
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export async function updateUserInfoService({
    firstName, lastName, address, mobileNumber, token
}) {
    let {data} = await axios.patch(`${URL}/updateMe`, {
        firstName: firstName,
        lastName: lastName,
        address: address,
        mobile: mobileNumber,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data
}