import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const Theme = () =>{
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="WeatherMain_toggle_theme">
    <button className={theme ? "WeatherMain_btn WeatherMain_btn-light" : "WeatherMain_btn WeatherMain_btn-dark"} onClick={() => dispatch(toggleTheme())}>
      {
        theme ? "dark" : "light"
      }
    </button>
    </div>
  )
};

export default Theme;