import './App.css';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/about';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/footer';

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
import ReadyMade from './pages/loupesLights/loupes/readyMode/readyMode';
import CustomeYourLoupe from './pages/3dModels/CustomeLoupe';
import 'swiper/css/navigation';
import ProfessionDetails from './pages/profession/details/professionDetails';
import { Toaster } from 'sonner';
import Navbar3d from './components/Navbar/navbar3d';
import OrderCarbonX from './pages/orderCarbon';

function App() {
  let location = useLocation()

  return (
    <>
       <Toaster position="top-right" richColors/>
    {
      location.pathname != "/CustomeYourLoupe" ?
        <Navbar />
        :
        <Navbar3d/>
    }
  <Routes>
    <Route element={<HomePage/>} path='/' />
    <Route element={<AboutPage/>} path='/about' />
    <Route element={<ContactUs/>} path='/contact' />
    <Route element={<ProfessionPage/>} path='/profession' />
    <Route element={<ProfessionDetails/>} path='/profession/:proffId' />
    {/* <Route element={<DentalPage/>} path='/profession/dental' />
    <Route element={<HygienistPage/>} path='/profession/hygienist' />
    <Route element={<SurgicalPage/>} path='/profession/surgical' />
    <Route element={<StudentPage/>} path='/profession/student' />
    <Route element={<OthersPage/>} path='/profession/others' /> */}
    <Route element={<ErgonomicsPage/>} path='/ergonomics' />
    <Route element={<LoupesLights/>} path='/loupes-lights' />
    <Route element={<CreateMode/>} path='/loupes-lights/loupes/create-mode' />
    <Route element={<ReadyMade/>} path='/loupes-lights/loupes/ready-made' />
    <Route element={<MagnificationsPage/>} path='/loupes-lights/Magnifications' />
    <Route element={<OpticsSafetyPage/>} path='/loupes-lights/Optics-Safety' />
    <Route element={<WarrantyPage/>} path='/loupes-lights/Warranty' />
    <Route element={<LightsPage/>} path='/loupes-lights/lights' />
    <Route element={<AccessoriesPage/>} path='/loupes-lights/accessories' />
    <Route element={<CustomeYourLoupe/>} path='/CustomeYourLoupe' />

    <Route element={<OrderCarbonX/>} path='/orderCarbonX' />
  </Routes>
  {/* <TrySection/> */}
  {
      location.pathname != "/CustomeYourLoupe" &&
      <Footer/>
        
    }
    </>
  );
}

export default App;
