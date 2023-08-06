import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import Compose from './screens/Compose';
import Home from './screens/Home';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route
} from "react-router-dom";
import Detail from './screens/Detail';
import Delete from './screens/Delete';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/compose" element={<Compose />}/>
          <Route path="/delete" element={<Delete />}/>
          <Route path="/content/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
