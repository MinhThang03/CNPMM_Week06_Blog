import './App.css';
import NavbarComponent from './components/Navbar';
import Auth from './routes';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Auth />
    </div>
  );
}

export default App;
