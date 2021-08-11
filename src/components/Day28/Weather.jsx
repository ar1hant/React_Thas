import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';
import {useState} from 'react';

function Weather(){
  const [place, setPlace] = useState("");
  const [placeData, setData] = useState({});

  const updatePlaceData = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7574597f23ff40de85d132005210308&q=${place}&days=3`)
    .then(res => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
      setPlace("");
    });
  }

  return(
    <div className="Weather_App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input type="text" value={place} placeholder="City Name" onChange={(e) => {
              setPlace(e.target.value);
            }}/>
            <button className="Weather_btn Weather_box" onClick={updatePlaceData}>Go</button>
          </div>
          <div className="col-12 Weather_weather">
            <div className="Weather_card">
              {
                placeData.location ?
                <div className="container"> 
                  <div className="row">
                    <div className="col-4 Weather_name_styling_l">
                      <div>{placeData.location.name}</div>
                      <div>{placeData.location.country}</div>
                    </div>
                    <div className="col-4">
                      <img src={placeData.current.condition.icon} alt="cloud" />
                    </div>
                    <div className="col-4 Weather_name_styling_r">
                      <div>{placeData.current.temp_c}&deg;</div>
                      <div>{placeData.location.country}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 Weather_name_styling_bottom">
                      <div>TODAY</div>
                      <img src={placeData.forecast.forecastday[0].day.condition.icon} alt="cloud" />
                      <div className="Weather_max_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
                      <div className="Weather_min_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
                    </div>
                    <div className="col-4 Weather_name_styling_bottom">
                      <div>TOMMOROW</div>
                     <img src={placeData.forecast.forecastday[1].day.condition.icon} alt="cloud" />
                     <div className="Weather_max_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
                      <div className="Weather_min_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
                    </div>
                    <div className="col-4 Weather_name_styling_bottom">
                      <div>DAY AFTER TOM.</div>
                      <img src={placeData.forecast.forecastday[2].day.condition.icon} alt="cloud" />
                      <div className="Weather_max_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
                      <div className="Weather_min_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
                    </div>
                  </div>
                </div>
                : <h2>No Place Found</h2>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;