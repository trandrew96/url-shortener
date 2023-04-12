import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form.js";
function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=trandrew.ca",
        { mode: "cors" }
      );
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div className="App">
      {/* <h1 className="text-4xl">More than just shorter links</h1> */}
      <Form></Form>
    </div>
  );
}
export default App;
