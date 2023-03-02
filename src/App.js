import ScrollToTop from './components/ScrollToTop';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import RequestForm from './components/RequestForm';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolling(true)
      );
    }
  }, []);

  const [form, setForm] = useState(false)

  const displayRequestForm = () => {
    setForm(!form)
  }

  const closeForm = () => {
    setForm(false)
  }

  return (
    <BrowserRouter>
      <main className="App">
        <Navbar formDisplay={displayRequestForm} />
        {form ? <RequestForm closeForm={closeForm} setForm={setForm} /> : null}
        <div className="content"> 
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      {isScrolling && <ScrollToTop />}
      </main>
    </BrowserRouter>
  );
}

export default App;
