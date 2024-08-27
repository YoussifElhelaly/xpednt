import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/about';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import TrySection from './components/trySection/trySection';
import DentalPage from './pages/profession/dental/dental';
import HygienistPage from './pages/profession/hygienist/hygienist';
import StudentPage from './pages/profession/student/student';
import OthersPage from './pages/profession/others/others';
import SurgicalPage from './pages/profession/surgical/surgical';
import ContactUs from './pages/contactUs';
import ErgonomicsPage from './pages/ergonomics';
import ProfessionPage from './pages/profession/professionPage';
import LoupesLights from './pages/loupesLights/loupesLights';
import LoupesPage from './pages/loupesLights/loupes/loupes';
import MagnificationsPage from './pages/loupesLights/magnifications/magnifications';
import WarrantyPage from './pages/loupesLights/Warranty/Warranty';
import OpticsSafetyPage from './pages/loupesLights/opticsSafety/opticsSafety';
import LightsPage from './pages/loupesLights/lights/lights';
import AccessoriesPage from './pages/loupesLights/Accessories/Accessories';
import CreateMode from './pages/loupesLights/loupes/createMode/createMode';

function App() {
  return (
    <>
    <Navbar />
  <Routes>
    <Route element={<HomePage/>} path='/' />
    <Route element={<AboutPage/>} path='/about' />
    <Route element={<ContactUs/>} path='/contact' />
    <Route element={<ProfessionPage/>} path='/profession' />
    <Route element={<DentalPage/>} path='/profession/dental' />
    <Route element={<HygienistPage/>} path='/profession/hygienist' />
    <Route element={<SurgicalPage/>} path='/profession/surgical' />
    <Route element={<StudentPage/>} path='/profession/student' />
    <Route element={<OthersPage/>} path='/profession/others' />
    <Route element={<ErgonomicsPage/>} path='/ergonomics' />
    <Route element={<LoupesLights/>} path='/loupes-lights' />
    <Route element={<CreateMode/>} path='/loupes-lights/loupes/create-mode' />
    <Route element={<MagnificationsPage/>} path='/loupes-lights/Magnifications' />
    <Route element={<OpticsSafetyPage/>} path='/loupes-lights/Optics-Safety' />
    <Route element={<WarrantyPage/>} path='/loupes-lights/Warranty' />
    <Route element={<LightsPage/>} path='/loupes-lights/lights' />
    <Route element={<AccessoriesPage/>} path='/loupes-lights/accessories' />
  </Routes>
  <TrySection/>
  <Footer/>
    </>
  );
}

export default App;
