import './App.css';
import LinkScraper from './components/LinkScraper.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LinkScraper />
      <Footer/>
    </div>
  );
}

export default App;
