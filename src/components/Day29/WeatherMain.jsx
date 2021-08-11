import App from "./App.jsx";
import store from "./store";
import {Provider} from "react-redux";

export default function WeatherMain(){
  return (
    <Provider store={store}>
      <App />
    </Provider>)
}
