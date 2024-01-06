import { Route, Routes, Navigate } from 'react-router-dom';
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
        <Route index element={<HackathonDay />}/>
        <Route path="/prizetracks" element={<PrizeTracks />} />
        <Route path="/thepeople" element={<People />} />
        <Route path="/faqs" element={<FAQ />} />
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
