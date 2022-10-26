import { useState } from 'react';
import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <RouterProvider router={routes}></RouterProvider>
        <div className='switch'>
          <label>{theme === "light" ? "Light" : "Dark"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}></ReactSwitch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
