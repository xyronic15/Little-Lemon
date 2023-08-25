import { Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, Home, Reserve, NotFound, ConfirmedReservation } from "./components"
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/Little-Lemon/" element={<Home />} />
          <Route path="/Little-Lemon/about" element={<NotFound />} />
          <Route path="/Little-Lemon/menu" element={<NotFound />} />
          <Route path="/Little-Lemon/reserve" element={<Reserve />} />
          <Route path="/Little-Lemon/confirm-reservation" element={<ConfirmedReservation />} />
          <Route path="/Little-Lemon/order" element={<NotFound />} />
          <Route path="/Little-Lemon/login" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
