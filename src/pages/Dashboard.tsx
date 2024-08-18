import React from 'react';

import { useDashboardData } from '../hooks/useDashboardData';
import Maps from '../components/Maps';
import Lines from '../components/Line';
import BarComponents from '../components/BarComponents';

const Dashboard: React.FC = () => {
  const { globalData, countryData, 
    historicalData, globalError, 
    countryError, historicalError } = useDashboardData(); //getting data from custom hook



  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Covid Cases Over Time</h2>
        { historicalError? <h3 className='text-yellow-800'>Something Went Wrong</h3>:
        <Lines data={historicalData} />}  
        {/* checking error conditional UI render */}
      </div>
      
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Covid Cases by Country</h2>
        { globalError ? <h3 className='text-yellow-800'>Something Went Wrong</h3>:
        <BarComponents data={globalData} />
        } 
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Covid Cases by Country</h2>
        { countryError ? <h3 className='text-yellow-800'>Something Went Wrong</h3>:
        <Maps countries={countryData} />}
      </div>
    </div>
  );
};

export default Dashboard;
