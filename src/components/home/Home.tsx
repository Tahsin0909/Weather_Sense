import React, { useState } from 'react';
interface Location {
    latitude: number;
    longitude: number;
}
interface Error {
    error: string
}
const Home = () => {
    const [userLocation, setUserLocation] = useState<Location | null>(null)
    const [error, setError] = useState<Error | null>(null)

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                (error) => {
                    // display an error if we cant get the users position
                    setError({ error: 'Error getting user location' });
                    setUserLocation({ latitude: 22.739 , longitude:90.1232 });
                }
            )
        }
        else {
            console.error('Geolocation is not supported by this browser.');
            setUserLocation({ latitude: 22.739 , longitude:90.1232 });
        }
    };
    if(!userLocation){
        getUserLocation()
    }
    return (
        <div>
            <button className='btn' onClick={() => getUserLocation()}>Location</button>
            {
                error && <p>{error.error}</p>
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