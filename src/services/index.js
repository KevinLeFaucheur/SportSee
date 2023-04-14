import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'http://localhost:3000/';

/**
 * Retrieves general data by endpoint /user/:userId
 * @param {string} userId 
 * 
 * @returns {{ id: number, 
*              keyData: { calorieCount: number, carbohydrateCount: number, lipidCount: number, proteinCount: number }, 
*              score: number,
*              userInfos: { firstName: number, lastName: number, age: number } 
*           } | Error } data object or Error object
*/
export const getUser = async (userId) => {
    try {
        const  { data }  = await axios.get(`${API_URL}user/${userId}`);
        return data;
    } catch (error) { 
        return new Error(`${error.message}, please try again later.`);
    }
};

/**
 * Retrieves activity data by endpoint /user/:userId/activity
 * @param {string} userId
 * 
 * @returns {{ sessions: [{ day: string, kilogram: number, calories: number }], 
 *             userId: number
 *          } | Error } data object or Error object
 */
export const getUserActivity = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/activity`);
        return data;
    } catch (error) { 
        return new Error(`${error.message}, please try again later.`);
    }
};

/**
 * Retrieves average session lengths data by endpoint /user/:userId/average-sessions
 * @param {string} userId
 *
 * @returns {{ sessions: [{ day: number, sessionLength: number }], 
 *             userId: number
 *          } | Error } data object or Error object
 */
export const getUserAverageSessions = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/average-sessions`);
        return data;
    } catch (error) { 
        return new Error(`${error.message}, please try again later.`);
    }
};

/**
 * Retrieves performance data by endpoint /user/:userId/performance
 * @param {string} userId
 * 
 * @returns {{ data: [{ value: number, kind: number }], 
 *             kind: [{ index: string }], 
 *             userId: number
 *          } | Error } data object or Error object
 */
export const getUserPerformance = async (userId) => {
    try {
        const { data } = await axios.get(`${API_URL}user/${userId}/performance`);
        return data;
    } catch (error) { 
        return new Error(`${error.message}, please try again later.`);
    }
};