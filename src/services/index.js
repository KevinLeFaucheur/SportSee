import axios from "axios";

const API_URL = 'http://localhost:3000/';

/**
 * Retrieves general data by user id
 * @param {string} userId 
 * @returns {{  }} user data
 */
export const getUser = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves activity data by user id
 * @param {string} userId 
 * @returns 
 */
export const getUserActivity = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/activity`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves average session lengths data by user id
 * @param {string} userId 
 * @returns 
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/average-sessions`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves performance data by user id
 * @param {string} userId 
 * @returns 
 */
export const getUserPerformance = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/performance`);
        return data;
    } catch (error) { console.log(error); }
};