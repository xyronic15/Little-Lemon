import { Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home } from "./components"
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
