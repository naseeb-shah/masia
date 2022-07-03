import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './component/home';
import Nav from './component/navbar';
import Log from './component/login';
import Book from './component/boking';
function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Nav />}>
          <Route index element={<Log />} />
          <Route path="home" element={<Home />} />
          <Route path="book" element={<Book />} />
          
        </Route>
</Routes>


</BrowserRouter>


);
}

export default App;
