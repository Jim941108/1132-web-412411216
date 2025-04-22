import './App.css';

function App() {
  return (
    <div className='App'>
      <Car></Car>
      <Car></Car>
    </div>
  );
}

const Car = () => {
  return (
    <div className='car'>
      <h2>hello world</h2>
      <div className='App-logo'>
        <img
          src='https://images.unsplash.com/photo-1527672809634-04ed36500acd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVhcnRofGVufDB8fDB8fHww'
          alt=''
        />
      </div>
      <p>this is my first code</p>
    </div>
  );
};
export default App;
