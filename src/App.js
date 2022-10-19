import ScrollToTop from './components/ScrollToTop';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import RequestForm from './components/RequestForm';

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
      <Main />
     {isScrolling && <ScrollToTop />}
    </main>
  );
}

export default App;
