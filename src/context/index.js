import React, { useState, useContext, createContext, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { url_getData } from '../api/endpoint';
import { GetData } from '../api';

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [dataResult, setDataResult] = useState(null);
    
    const fetchDataFromAPI = async () => {
        // setDataResult(GetData());
        try {
            const response = await fetch(url_getData, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'KEY': '0101',
                },
                });
        
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const result = await response.json();
                setDataResult(result);
                console.log(result);
                // return result;
                
                
            } catch (error) {
                console.error(error.message);
                throw new Error('Something wrong!');
            }
    };

    const [paramAction, setParamAction] = useState(null);
    const updateParamAction = (newValue) => {
        setParamAction(newValue);
    };

    const [paramName, setParamName] = useState(null);
    const updateParamName = (newValue) => {
        setParamName(newValue);
    };

    const [paramGender, setParamGender] = useState(null);
    const updateParamGender = (newValue) => {
        setParamGender(newValue);
    };

    const [paramSide, setParamSide] = useState(null);
    const updateParamSide = (newValue) => {
        setParamSide(newValue);
    };

    const [paramLimit, setParamLimit] = useState(null);
    const updateParamLimit = (newValue) => {
        setParamLimit(newValue);
    };

    const [paramLimitValue, setParamLimitValue] = useState(null);
    const updateParamLimitValue = (newValue) => {
        setParamLimitValue(newValue);
    };

    return (
        <AppContext.Provider value={{
            dataResult, fetchDataFromAPI,
            paramAction, updateParamAction,
            paramName, updateParamName,
            paramGender, updateParamGender,
            paramSide, updateParamSide,
            paramLimit, updateParamLimit,
            paramLimitValue, updateParamLimitValue
        }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};
    
export { AppProvider, useAppContext }
