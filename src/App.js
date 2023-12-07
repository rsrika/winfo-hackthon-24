import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import HackathonDay from './pages/HackathonDay';
import PrizeTracks from './pages/PrizeTracks';
import People from './pages/People';
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HackathonDay />} />
        <Route path="/prizetracks" element={<PrizeTracks />} />
        <Route path="/thepeople" element={<People />} />
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
