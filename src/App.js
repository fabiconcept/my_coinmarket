import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './pages/home';
import { fetchListings, fetchSearchList, fetchTrend } from './store/thunk/fetchList';
import NavBar from './components/navBar';
import Preloader from './components/preloader';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import View from './pages/view';


const App = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
  var r = document.querySelector(':root');
  const dispatch = useDispatch()

  myFunction_set(prefersDarkMode)

  function myFunction_set(mode) {
    if(!mode){
      r.style.setProperty('--sug', 'rgba(255, 255, 255, 0.7)');
      r.style.setProperty('--border', '2px solid rgba(0, 0, 0, 0.1)');
      r.style.setProperty('--back', 'rgb(244, 244, 255)');
      r.style.setProperty('--t-color', 'rgb(0, 0, 0)');
      r.style.setProperty('--tp-color', 'rgba(0, 0, 0, 0.904)');
    }else{
      r.style.setProperty('--sug', 'rgba(25, 25, 26, 0.7))');
      r.style.setProperty('--border', '2px solid rgba(255, 255, 255, 0.1)');
      r.style.setProperty('--back', 'rgb(8, 5, 31)');
      r.style.setProperty('--t-color', 'rgb(255, 255, 255)');
      r.style.setProperty('--tp-color', 'rgba(255, 255, 255, 0.904)');
    }
  }

  useEffect(() => {
    dispatch(fetchListings());
    dispatch(fetchSearchList());
    dispatch(fetchTrend());

  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="app">
        <Preloader />
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route path='/view/:id' element={<View />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;