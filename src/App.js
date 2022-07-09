
import './App.css';

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
<div className='card'>
     <h1 className='card-title'>React Crad</h1>
     <p className='card-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et delectus commodi eaque expedita libero, harum excepturi praesentium laborum vitae iusto quia atque sequi cupiditate amet recusandae. Exercitationem, deserunt est.</p>
     <p className='card-footer'>footer</p>
</div>
    </div>
  );
}

export default App;
