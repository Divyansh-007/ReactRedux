import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CakeShop from "./components/CakeShop";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeShop />
      </div>
    </Provider>
  );
}

export default App;
