import './App.css';
import { Route, Routes } from 'react-router-dom';

import AddForm from './Pages/AddForm';
import Preview from './Pages/Preview';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AddForm/>}/>
      <Route path='/View' element={<Preview/>}/>
    </Routes>
  );
}

export default App;