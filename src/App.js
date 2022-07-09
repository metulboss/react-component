import "./components/Card/Card"
import './App.css';
import Card from "./components/Card/Card";

function App() {


const bg={
  backgroundColor:"purple",
  color:"white",
  padding:"15px",
  textAlign:"center"
}

  return (
    <div className="App">
     <h1 style={bg}>React - Component</h1>
     <Card></Card>
     <Card></Card>
    </div>
  );
}

export default App;
