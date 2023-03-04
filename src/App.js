import ScrollToTop from './components/ScrollToTop';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RequestForm from './components/RequestForm';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './context/StateContextProvider';
import Footer from './components/Footer';

const App = () => {
  const { isScrolling, form } = useStateContext()
  return (
      <BrowserRouter>
        <main className="App">
          <Navbar />
          {form ? <RequestForm /> : null}
          <div className="content"> 
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
          {isScrolling && <ScrollToTop />}
        </main>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
