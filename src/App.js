import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Greetings from './components/Greetings';
import Greetings2 from './components/Greetings2';

//Function Component - *Preferred
const App = () => {
  const [theme, setTheme] = useState('light');


  const themeChanger = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className={'App ' + theme}>
      <Navbar />
      {/* Add "url" props */}
      <Greetings name={'React'} color={'#61dafb'} />
      <Greetings name={'JavaScript'} color={'Yellow'} />
      <Greetings name={'MongoDB'} color={'green'} />
      <Greetings2
        greetingInfo={{
          name: 'Python',
          color: 'blue',
          url: 'https://www.python.org/',
        }}
      />

      <select onChange={themeChanger}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
};

export default App;
