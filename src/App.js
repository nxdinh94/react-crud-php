
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';

import './App.css';


function App() {
  return (
    <div className="App">
      <h3>React CRUD operations using PHP API and MYSQL</h3>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to= '/'>List Users</Link>
            </li>
            <li>
              <Link to= 'user/create'>Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser/>}/>
          <Route path='user/create' element={<CreateUser/>}/>
          <Route path='user/:id/edit' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
