import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';

function App() {
  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetail/>} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;
