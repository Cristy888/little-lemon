import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Nav />
        <Main />
      </div>
    </BrowserRouter>
  );
}
