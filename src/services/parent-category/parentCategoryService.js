import axios from "axios";

const URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/parentCategory`;

export async function getAllParentCategory() {
    let {status, data} = await axios.get(`${URL}/all`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data
}

export async function getAllSubCategoryUnderAllParentCategory() {
    let {status, data} = await axios.get(`${URL}/all`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    const allSubData = {};

    await Promise.all(data.data.parentCategories.map(async (item) => {
        const requestData = await axios.get(`${URL}/under/${item.name}`);

        if (requestData.status === 200) {
            allSubData[item.name] = requestData.data.data;
        }
    }));

    return allSubData;
}

export async function getAllSubCategoryUnderOneParentCategory(category) {
    let {status, data} = await axios.get(`${URL}/under/${category}`);

    if (status !== 200) {
        throw new Error('Data not found...');
    }

    return data;
}