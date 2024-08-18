import { useQuery } from 'react-query';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}; /// fetch data resuabale component

export const useDashboardData = () => {
    // useQuery to fetch data with destructure of data and error 
  const { data: globalData, error: globalError } = useQuery('globalData', () =>
    fetchData('https://disease.sh/v3/covid-19/all')
  ); 

  const { data: countryData, error: countryError } = useQuery('countryData', () =>
    fetchData('https://disease.sh/v3/covid-19/countries')
  );

  const { data: historicalData, error: historicalError } = useQuery('historicalData', () =>
    fetchData('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
  );

  return { globalData, globalError, countryData, countryError, historicalData, historicalError };
};
