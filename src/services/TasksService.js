import axios from "axios";

const API_URL = "http://localhost:3001";

export const findAll = async () => {
    const result = await axios.get(`${API_URL}/tasks`);
    return result.data;
};

export const createTask = async (task) => {
    const result = await axios.post(`${API_URL}/tasks`, task);
    return result.data;
};

export const eraseTask = async (id) => {
    const result = await axios.delete(`${API_URL}/tasks/${id}`);
    return result.data;
};

export const completeTask = async (id, done) => {
    const result = await axios.patch(`${API_URL}/tasks/${id}`, { done });
    return result.data;
};