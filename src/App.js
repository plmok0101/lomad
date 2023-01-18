import './App.css';
import './css/reset.css'
import React, { Fragment } from 'react'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import TestLick from './compount/TestLick';
import App2 from './app2';
function App() {
  return(
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<TestLick/>}></Route>
        <Route path='/app2/' element={<App2/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
