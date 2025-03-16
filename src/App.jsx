import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greetings="HOLA MUNDO"/>
    </div>
  )
};

export default App;
