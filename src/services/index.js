import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'http://localhost:3000/';

/**
 * Retrieves general data by endpoint /user/:userId
 * @param {string} userId 
 * @returns { Promise.<{
 *              id: number, 
 *              keyData: { calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number }, 
 *              todayScore: number, 
 *              userInfos: { firstName: string, lastName: string, age: number } 
 * }>} Promise object data
 */
export const getUser = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves activity data by endpoint /user/:userId/activity
 * @param {string} userId 
 * @returns { Promise.<{
 *              sessions: [{ day: string, kilogram: number, calories: number }], 
 *              userId: number
 * }>} Promise object data
 */
export const getUserActivity = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/activity`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves average session lengths data by endpoint /user/:userId/average-sessions
 * @param {string} userId 
 * @returns { Promise.<{
 *             sessions: [{ day: number, sessionLength: number }], 
 *             userId: number
 * }>} Promise object data
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/average-sessions`);
        return data;
    } catch (error) { console.log(error); }
};

/**
 * Retrieves performance data by endpoint /user/:userId/performance
 * @param {string} userId 
 * @returns { Promise.<{
 *             data: [{ value: number, kind: number }], 
 *             kind: [{ index: string }], 
 *             userId: number
 * }>} Promise object data
 */
export const getUserPerformance = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/performance`);
        return data;
    } catch (error) { console.log(error); }
};