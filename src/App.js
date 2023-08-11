import { Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home, NotFound } from "./components"
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/menu" element={<NotFound />} />
          {/* <Route path="/reserve" element={<Reserve />} /> */}
          <Route path="/order" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
