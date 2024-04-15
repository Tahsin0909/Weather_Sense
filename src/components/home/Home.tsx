import { useContext } from "react";
import { WEatherContext } from "../../weatherContext/WEatherContext";

const Home = () => {
    const contextValue = useContext(WEatherContext);
    if (!contextValue) {
        // Handle the case when contextValue is undefined
        return <div>Loading...</div>;
    }
    const { citiesData,
        userLocation,
        locationError,
        CurrentWeatherData,
        ForecastData,
        getUserLocation } = contextValue;
    console.log(ForecastData);
    if (!userLocation) {
        getUserLocation()
    }
    return (
        <div>
            <button className='btn' onClick={() => getUserLocation()}>Location</button>
            {userLocation && (
                <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                    {/* current weather  */}
                    <div>
                        <p>City Name: {CurrentWeatherData?.name}</p>
                        <p>Humidity: {CurrentWeatherData?.main?.humidity}{CurrentWeatherData?.main?.humidity && '%'}</p>
                        <p>Temperature: {CurrentWeatherData?.main?.temp}{CurrentWeatherData?.main?.temp && 'k'}</p>

                        {
                            CurrentWeatherData?.weather.map((data, idx) => (
                                <div key={idx}>
                                    <p >Weather: {data?.main}</p>
                                    <p >Description: {data?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    {/* forecast  */}
                    <div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;