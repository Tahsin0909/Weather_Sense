import React, { ReactNode, createContext, useState } from "react";
import { useQuery } from '@tanstack/react-query'
// define weather context type 
interface weatherContextType {
    citiesData: Array<any>;
    ForecastData: Array<any>;
    CurrentWeatherData:  {
        name: string;
    } | null;
    userLocation: {
        latitude: number;
        longitude: number;
    } | null;
    locationError: string | LocationError;
    getUserLocation: () => void;
}
interface Location {
    latitude: number;
    longitude: number;
}
interface LocationError {
    locationError: string | ' '
}
const defaultLocation: Location = {
    latitude: 22.739, longitude: 90.1232
}
export const WEatherContext = createContext<weatherContextType | undefined>(undefined)

// define context api type 
interface ContextApiProps {
    children: ReactNode;
}
export const ContextApi: React.FC<ContextApiProps> = ({ children }) => {
    const [userLocation, setUserLocation] = useState<Location | null>(defaultLocation)
    const [locationError, setLocationError] = useState<LocationError | ' '>(' ')

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });

                },
                (error) => {
                    // if we cant get the users position
                    setLocationError({ locationError: 'Error getting user location' });
                    // setUserLocation({ latitude: 22.739, longitude: 90.1232 });
                }
            )
        }
        else {
            setLocationError({ locationError: 'Geolocation is not supported by this browser.' });
            // setUserLocation({ latitude: 22.739, longitude: 90.1232 });
        }
    };
    const { isPending: CurrentWeatherDataPending, error: CurrentWeatherError, data: CurrentWeatherData } = useQuery({
        queryKey: ['weatherData'],
        queryFn: async () => {
            const WeatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=22.739&lon=90.1232&appid=8b76fe04b354cc9680cc14eda701d843`);
            const CurrentWeather = await WeatherRes.json()
            return  CurrentWeather
        }
    })
    const { isPending: ForecastISPending, error: ForecastError, data: ForecastData } = useQuery({
        queryKey: ['weatherData'],
        queryFn: async () => {
            const ForecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${userLocation?.latitude}&lon=${userLocation?.longitude}&appid=8b76fe04b354cc9680cc14eda701d843`);
            const Forecast= await ForecastRes.json()
            return Forecast
        }
    })
    const citiesData = [1, 2, 3]
    const values: weatherContextType = {
        citiesData,
        userLocation,
        locationError,
        CurrentWeatherData,
        ForecastData,
        getUserLocation
    }
    return (
        <WEatherContext.Provider value={values}>
            {children}
        </WEatherContext.Provider>
    )
}