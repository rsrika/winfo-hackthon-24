import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/faqs" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;
