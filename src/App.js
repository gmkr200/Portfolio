import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Landing from './Components/Landing/Landing.js'; // Or Landing.jsx, depending on the file extension




function App() {
    return (
        <div className='body'> {/* This div should apply the background from CSS */}
            <Header />
            <Landing />
            <Footer />
        </div>
    );
}

export default App;
