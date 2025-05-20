import { useState } from 'react';

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });

  // Function to change the car's color
  function changeColor(color) {
    setCar((prevCar) => ({ ...prevCar, color }));
  }

  // Function to change the car's year
  function changeYear(newYear) {
    setCar((prevCar) => ({ ...prevCar, year: newYear }));
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button onClick={() => changeColor('green')}>
        Change Color to Green
      </button>
      <button onClick={() => changeColor('blue')}>Change Color to Blue</button>
      <br />
      <button onClick={() => changeYear(1000)}>Change Year to 1000</button>
    </>
  );
}

export default Car;
