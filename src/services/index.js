import axios from "axios";
import Axios from "axios"

const API_URL = 'http://localhost:3000/';

export const getUser = async (userId) => {
    try {
        // return Axios   
        //         .get(`${API_URL}user/${userId}`)
        //         .then((response) => {
        //             console.log(response.data.data);
        //         });
        const { data } = await axios.get(`${API_URL}user/${userId}`);
        console.log(data);
        return data;

    } catch (error) { console.log(error); }
};

export const getUserAge = (userId) => {
    const user = getUser(userId);
    console.log(user);
    return user.userInfos.age;
};

export const getUserActivity = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/activity`);
        return data;

    } catch (error) { console.log(error); }
};

export const getUserAverageSessions = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/average-sessions`);
        return data;

    } catch (error) { console.log(error); }
};

export const getUserPerformance = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/performance`);
        return data;

    } catch (error) { console.log(error); }
};