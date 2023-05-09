import "./App.css";
import info from "./assets/json/all-info.json";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card info={info.players[1]}></Card>
    </>
  );
}

export default App;
