import { useState } from 'react';
import Button from './Button';

const Greetings = ({ name, color }) => {
  // let counter = 2;
  const [counter, setCounter] = useState(0);

  const greetingStyle = {
    border: `2px solid ${color}`,
    height: '10rem',
    margin: '2rem',
  };

  const increment = () => {
    //setCounter(counter + 1);
    //setCounter(counter + 1);
    //setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div style={greetingStyle}>
      <p>Hello Ironhackers, Lets Learn {name}</p>
      <Button name={name} />
      <div>
        <button onClick={decrement}> - </button>
        {counter}
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
};
export default Greetings;
