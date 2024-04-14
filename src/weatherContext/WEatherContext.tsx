import React, { ReactNode, createContext, useState } from "react";
import { useQuery } from '@tanstack/react-query'
// define weather context type 
interface weatherContextType {
    citiesData: Array<any>;
    weatherData: Array<any>;
    userLocation: {
        latitude: number;
        longitude: number;
    } | null;
    locationError: string | LocationError;
    isPending: boolean;
    getUserLocation: () => void;
}
interface Location {
    latitude: number;
    longitude: number;
}
interface LocationError {
    locationError: string | ' '
}
export const WEatherContext = createContext<weatherContextType | undefined>(undefined)

// define context api type 
interface ContextApiProps {
    children: ReactNode;
}
export const ContextApi: React.FC<ContextApiProps> = ({ children }) => {
    const [userLocation, setUserLocation] = useState<Location | null>(null)
    const [locationError, setLocationError] = useState<LocationError | ' '>(' ')

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    // display an error if we cant get the users position
                    setLocationError({ locationError: 'Error getting user location' });
                    setUserLocation({ latitude: 22.739, longitude: 90.1232 });
                }
            )
        }
        else {
            setLocationError({locationError:'Geolocation is not supported by this browser.'});
            setUserLocation({ latitude: 22.739, longitude: 90.1232 });
        }
    };
    const { isPending, error: weatherError, data: weatherData } = useQuery({
        queryKey: ['weatherData'],
        queryFn: async () =>
            {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation?.latitude}&lon=${userLocation?.longitude}&appid=8b76fe04b354cc9680cc14eda701d843`);
                const weatherInfo = res.json()
                return weatherInfo
            }
    })
    const citiesData = [1, 2, 3]
    const values: weatherContextType = {
        citiesData,
        userLocation,
        locationError,
        weatherData,
        isPending,
        getUserLocation
    }
    return (
        <WEatherContext.Provider value={values}>
            {children}
        </WEatherContext.Provider>
    )
}