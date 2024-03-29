import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout/AppLayout';
import Navigation from '../Navigation/Navigation';

//ИМПОРТЫ СТРАНИЦ
import Stats from '../Stats/Stats';
import CalendarPage from '../CalendarPage/CalendarPage';
import ListPage from '../ListPage/ListPage';
import BoxPage from '../BoxPage/BoxPage';
import EmployeesPage from '../EmployeesPage/EmployeesPage';
import SettingPage from '../SettingPage/SettingPage';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='app'>
      <Navigation />
      <div className='app__content'>
        <Routes>
          <Route path='/' element={<AppLayout value={value} onChangeTab={handleChange}/>}>
          <Route path='/calendar'
            element={
              <CalendarPage />
            }
          />
          <Route path='/list'
            element={
              <ListPage />
            }
          />
          <Route path='/box'
            element={
              <BoxPage />
            }
          />
          <Route path='/employees'
            element={
              <EmployeesPage />
            }
          />
          <Route path='/stats'
            element={
              <Stats value={value}/>
            }
          />
          <Route path='/settings'
            element={
              <SettingPage />
            }
          />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
