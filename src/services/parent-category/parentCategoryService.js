import axios from "axios";

const URL = 'http://127.0.0.1:3000/api/v1/parentCategory';
// const URL = 'https://3550-150-107-93-11.ngrok-free.app/api/v1/parentCategory';

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