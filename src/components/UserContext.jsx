import { createContext, useState, useParams, useEffect } from 'react';
import { getUser, getUserActivity, getUserAverageSessions, getUserPerformance } from '../services';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const { id } = useParams();
    const [userInfos, setUserInfos] = useState([]);
    const [userActivity, setUserActivity] = useState([]);
    const [userAverageSessions, setUserAverageSessions] = useState([]);
    const [userPerformance, setUSerPerformance] = useState([]);

    useEffect(() => {
        setUserInfos(getUser(id));
        setUserActivity(getUserActivity(id))
        setUserAverageSessions(getUserAverageSessions(id))
        setUSerPerformance(getUserPerformance(id))
    }, [id]);

    const value = {
        userInfos,
        userActivity,
        userAverageSessions,
        userPerformance
    }

    return <UserContext.Provider value={value}>{{ children }}</UserContext.Provider>
};