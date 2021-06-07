import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeShop from "./components/CakeShop";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeShop /> */}
      </div>
    </Provider>
  );
}

export default App;
