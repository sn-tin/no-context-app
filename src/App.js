import ScrollToTop from './components/ScrollToTop';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import RequestForm from './components/RequestForm';
import About from './components/About';

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
    <main className="App">
      <Navbar formDisplay={displayRequestForm} />
      {form ? <RequestForm closeForm={closeForm} /> : null}
      <Home />
     {isScrolling && <ScrollToTop />}
     {/* <About /> */}
    </main>
  );
}

export default App;
