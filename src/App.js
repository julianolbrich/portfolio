import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
