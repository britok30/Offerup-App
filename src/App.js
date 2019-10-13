import React from "react";
import Home from "./components/Home";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store.configure(null)}>
      <Home />
    </Provider>
  );
};

export default App;
