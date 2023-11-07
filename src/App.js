import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
