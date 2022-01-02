import './App.css';
import { Navbar, Footer, Transaction, Services, Welcome, Loader } from './components'
function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  );
}

export default App;
