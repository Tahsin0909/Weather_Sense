import React, { useContext } from 'react';
import { WEatherContext } from '../../weatherContext/WEatherContext';

const CityTable = () => {
    const contextValue = useContext(WEatherContext);
    if (!contextValue || !contextValue.citiesData) {
        // Handle the case where contextValue is undefined 
        return <div>No city data available</div>;
    }
    return (
        <div>
            <p>City data in table</p>
            {
                contextValue?.citiesData.map((data: Array<any>, idx: number) => <p key={idx}>{data}</p>)
            }
        </div>
    );
};

export default CityTable;