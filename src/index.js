import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import App from "./App";
import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
