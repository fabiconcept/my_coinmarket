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
  const dispatch = useDispatch()

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
        </Routes>
        <Routes>
          <Route path='/view/' element={<View />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;