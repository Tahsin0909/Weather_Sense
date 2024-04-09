import React, { ReactNode, createContext } from "react";

// define weather context type 
interface weatherContextType {
    citiesData: Array<any>;
}
export const WEatherContext = createContext<weatherContextType | undefined >(undefined)

// define context api type 
interface ContextApiProps {
    children: ReactNode;
}
export const ContextApi: React.FC<ContextApiProps> = ({children})=>{
    const citiesData = [1, 2, 3]
    const values: weatherContextType = {
        citiesData
    }
    return (
        <WEatherContext.Provider value={values}>
            {children}
        </WEatherContext.Provider>
    )
}