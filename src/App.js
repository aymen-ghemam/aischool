import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Home from "./pages/Home";



const App = () => {
    return (
        <Home />
    )
}

export default App;
