import "./App.css";
import info from "./assets/json/all-info.json";
import Card from "./components/Card";

function App() {
  // console.log(info.players[0]);
  return (
    <>
      <Card info={info.players[0]}></Card>
    </>
  );
}

export default App;
