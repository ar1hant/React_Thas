import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

export default function UserInputApp(){
    return (
      <Provider store ={store}>
        <App />
      </Provider>)
}