import NavBar from './NavBar'
import Home from "./home/Home";
import MyShelf from "./MyShelf";
import Browse from './browse/Browse';
import Account from "./Account";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse /> } />
        <Route path='/myshelf' element={<MyShelf /> } />
        <Route path='/account' element={<Account /> } />
      </Routes>
    </div>
  );
}

export default App;
