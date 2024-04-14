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
        weatherData,
        isPending,
        getUserLocation } = contextValue;
console.log(weatherData);
    return (
        <div>
            <button className='btn' onClick={() => getUserLocation()}>Location</button>
            {
                // locationError && <p>{locationError?.locationError}</p>
            }
            {userLocation && (
                <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                </div>
            )}
        </div>
    );
};

export default Home;