import './App.css';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Bio from './components/Bio';
import Work from './components/Work';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Bio />
      <Work />      
      <ContactForm />
    </div>
  );
}

export default App;
