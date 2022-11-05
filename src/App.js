import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import ErrorPage from './components/ErrorPage';
import Linktree from './components/Linktree';
import Contact from './components/Contact/Contact'
import SuccessPage from './components/Contact/SuccessPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/'  element={<Linktree/>}/>
        <Route path='*'  element={<ErrorPage/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/success'  element={<SuccessPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    

  );
}

export default App;
