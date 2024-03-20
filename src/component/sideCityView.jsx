import React, { useEffect, useState } from 'react';
import { IMAGE_ACCESS_KEY, WEATHER_API_KEY } from '../utils/constants';
import Cloud from '../assets/cloud.PNG';
import { WEATHER_API , CITY_IMG} from '../utils/constants';
import SearchComponent from './search';
import { useSelector } from 'react-redux';


const SideCityView = () => {
  const searchTerm = useSelector(state => state.searchTerm);
  const [image, setImage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('Mumbai');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchCityImage = async () => {
      try {
        const response = await fetch(`${CITY_IMG}query=${searchTerm}&client_id=${IMAGE_ACCESS_KEY}`);
        const data = await response.json();
        if (data.results.length > 0) {
          setImage(data.results[0].urls.regular);
        }
      } catch (error) {
        console.error('Error fetching city image:', error);
      }
    };

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${WEATHER_API}q=${searchTerm}&appid=${WEATHER_API_KEY}`);
        const data = await response.json();
        setWeatherData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    if(searchTerm.length > 2){
      fetchWeatherData();
      fetchCityImage();  
    }
  }, [searchTerm]);

  return (
    
    <div className='sideCityView'>
      <SearchComponent />
      <div>
        <div>
          <img src={Cloud} alt="cloud" className='cloudImg'/>
          <h1>{Number((weatherData?.list?.[0]?.main?.temp) - 273.15).toFixed(2)} <sup>*C</sup></h1>
          <p>{Date(weatherData?.city?.sunrise)}</p>
          <hr />
          <p>{weatherData?.list?.[0]?.weather?.[0]?.description}</p>
          <p>{weatherData?.list?.[0]?.weather?.[0]?.main}</p>
        </div>
        <div className='cityImg'>
          {image && <img src={image} alt="city"/>}
          <p>{weatherData?.city?.name}</p>
        </div>
      </div>
    </div>
  )
}

export default SideCityView