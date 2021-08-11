import 'bootstrap/dist/css/bootstrap.min.css';
import './WeatherMain.css';
import Form from "./components/form";
import Weather from "./components/weather";
import store from "./store";
import {Provider} from "react-redux";

import Theme from "./components/theme";
// import {useState} from 'react';
// import {useEffect} from 'react';

import {useSelector} from "react-redux";

function App(){
  const theme = useSelector((state) => state.theme);
  // console.log(theme);
  return(
    <Provider store = {store}>
      <div className={theme ? "WeatherMain_App WeatherMain_dark" : "WeatherMain_App"}>
        <Theme />
        <Form />
        <Weather />
      </div>
    </Provider>
  )
}

export default App;