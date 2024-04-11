import axios from "axios";

export const getAll = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/products`);
        return res.data
    } catch (e){
        console.log(e);
    }
}

export const createNewPhone = async (phone) => {
    try {
        const res = await axios.post(`http://localhost:8080/products`, phone);
        console.log(res.data)
    } catch (e){
        console.log(e)
    }
}

export const updatePhone = async (phone) => {
    try {
        const res = await axios.put(`http://localhost:8080/products/` + phone.id, phone);
        console.log(res.data);
    } catch (e){
        console.log(e);
    }
}