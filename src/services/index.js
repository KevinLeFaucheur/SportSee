import axios from "axios";

const API_URL = 'http://localhost:3000/';

/**
 * Retrieves general data by user id
 * @param {string} userId 
 * @returns { data: { 
 *              id: number, 
 *              keyData: { calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number }, 
 *              todayScore: number, 
 *              userInfos: { firstName: string, lastName: string, age: number } 
 * }} user data
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
 * @returns { data: { 
 *              sessions: [{ day: Date, kilogram: number, calories: number }], 
 *              userId: number
 * }} activity data
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
 * @returns { data: { 
 *             sessions: [{ day: number, sessionLength: number }], 
 *             userId: number
 * }} average sessions length data
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
 * @returns { data: { 
 *             data: [{ value: number, kind: number }], 
 *             kind: [{ index: string }], 
 *             userId: number
 * }} performance by day data
 */
export const getUserPerformance = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/performance`);
        return data;
    } catch (error) { console.log(error); }
};