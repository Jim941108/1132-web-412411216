import { useEffect, useState } from 'react';
import './App.scss';
function App() {
  const [color, setColor] = useState('');
  const [colorarray, setColorarray] = useState([]);
  console.log(colorarray);
  useEffect(() => {
    return setColorarray([...colorarray, color]);
  }, [color]);
  return (
    <>
      <FavoriteColor color={color} setColor={setColor} />
      <Car></Car>
      <Totalcolor array={colorarray}></Totalcolor>
    </>
  );
}

function FavoriteColor({ color, setColor }) {
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>
      <button type='button' onClick={() => setColor('red')}>
        red
      </button>
      <button type='button' onClick={() => setColor('pink')}>
        Pink
      </button>
      <button type='button' onClick={() => setColor('green')}>
        Green
      </button>
    </>
  );
}

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  function changeColor(newcolor) {
    setCar({ ...car, color: newcolor });
  }
  function changYear(newyear) {
    setCar({ ...car, year: newyear });
  }
  const handleYearChange = (e) => {
    setCar({ ...car, year: e.target.value });
  };
  return (
    <>
      <h1>My{car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={() => changeColor('green')}>changColor to =green</button>
      <button onClick={() => changeColor('blue')}>changColor to =green</button>
      <br></br>
      <button onClick={() => changYear(1000)}>改年份</button>
      <input type='text' placeholder='輸入年分' onChange={handleYearChange} />
    </>
  );
}
function Totalcolor({ array }) {
  return (
    <>
      <h2>All selected colors:</h2>
      {array.map((value, index) => {
        return (
          <span key={index} className={value}>
            {value}
          </span>
        );
      })}
    </>
  );
}

export default App;
