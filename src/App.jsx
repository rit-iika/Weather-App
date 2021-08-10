import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Form from "./components/Form";
import Card from "./components/Card";
import Theme from "./components/Theme";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={theme ? "App dark" : "App"}>
      <div className="container">
        <h2 className="head">weather check</h2>
        <h5>enter your place and know the weather !</h5>
        <div className="row">
          <Theme />
          <Form />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default App;
