import {createContext, useContext, useState} from 'react'
import axios from "axios"

const StateContext = createContext();
const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const StateContextProvider = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    
    const fetchData = async (url) => {
        setLoading(true);
        const data = await axios.get(`${baseUrl}/${url}`,{
            
            params:{
                
                key: 'AIzaSyAa_Dl3FleVnro2U80lEe5m9YmRutRx9Ao',
                maxResults:50,
            }
        });
        // console.log(data)
        
        setData(data?.data?.items);
        setLoading(false);
    };

    const fetchOtherData = async (url) => {
        const data =  await axios.get(`${baseUrl}/${url}`,{
            params:{
                // key:process.env.YOUTUBE_API_KEY,
                key: 'AIzaSyAa_Dl3FleVnro2U80lEe5m9YmRutRx9Ao',
                maxResults: 50,
                regionCode: 'NG',
            },
        });
        setResults(data?.data?.items)
        // console.log(data?.data.items)s
    };
    return (
        <StateContext.Provider 
            value={{
                fetchData,
                fetchOtherData,
                results,
                data,
                loading,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);