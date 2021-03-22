import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import DictionaryPage from "./pages/DictionaryPage";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/dictionary">
              <DictionaryPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
