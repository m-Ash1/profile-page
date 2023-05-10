import "./App.css";
import info from "./assets/json/all-info.json";
import Card from "./components/Card";
import Error404 from "./components/Error404";

function App() {
  const isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <Card info={info.players[0]}></Card>;
  } else {
    content = <Error404></Error404>;
  }
  return content;
}

export default App;
