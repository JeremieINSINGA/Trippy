import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import HotelPage from "./components/HotelPage";
import Hotels from "./components/Hotels";
import Error404 from "./components/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hotels/:city" component={Hotels} />
        <Route path="/hotel/:id" component={HotelPage} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}