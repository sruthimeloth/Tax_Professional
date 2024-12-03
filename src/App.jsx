import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
import Footer from './Components/Footer';
import HomeImage from './Components/HomeImage';
import GSTPage from './Services/GSTPage';
import LLPRegistrationPage from './Services/LLPRegistrationPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import BookAppointment from './Pages/BookAppointment';
import 'font-awesome/css/font-awesome.min.css';
import Careers from './Components/Careers';
import GSTRegistration from './Services/GSTRegistration';
import AboutTaxpayer from './Services/AboutTaxpayer';
import FindConsultant from './Pages/FindConsultant';
import ViewProfile from './Pages/ViewProfile';
import BookAnAppointment from './Pages/BookAnAppointment';
import GSTreturnFiling from './Services/GSTreturnFiling';
import AboutGstRetrunFiling from './Services/AboutGstRetrunFiling';
import GSTPaymentService from './Services/GSTPaymentService';
import GSTAmendmentService from './Services/GSTAmendmentService';
import GSTCancelationApplicationService from './Services/GSTCancelationApplicationService';
import FooterContact from './Pages/FooterContact';
import MCAService from './Services/MCAService';
import CompanyRegistration from './Services/CompanyRegistration';
import PANService from './Services/PANService';
import TANServices from './Services/TANServices';
import TDSService from './Services/TDSService';
import OurTeam from './Pages/OurTeam';
import CvForm from './Pages/CvForm';
import ScrollToTop from './Components/ScrollToTop';
import IncomeTax from './Services/IncomeTax';





function App() {


  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/ourteam" element={<OurTeam/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gst" element={<GSTPage />} />
        <Route path="/gstregistration" element={<GSTRegistration />} />
        <Route path="/gstreturnfiling" element={<GSTreturnFiling />} />
        <Route path="/gstpaymentservice" element={<GSTPaymentService />} />
        <Route path="/gstamendmentservice" element={<GSTAmendmentService />} />
        <Route path="/gstcancellationapplicationservice" element={<GSTCancelationApplicationService />} />

        <Route path="/abouttaxpayer" element={<AboutTaxpayer/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
     
        <Route path="/aboutgstreturnfiling" element={<AboutGstRetrunFiling/>} />

        <Route path="/Findconsultant" element={<FindConsultant />} />
        {/* <Route path="/viewprofile" element={<ViewProfile />} /> */}
        <Route path="/view-profile/:id" element={<ViewProfile />} />

        {/* <Route path="/appointment" element={<BookAppointment />} /> */}
        <Route path="/appointment/:consultantId" element={<BookAppointment />} />
        <Route path="/book-appointment" element={<BookAnAppointment />} />

        <Route path="/llp-registration" element={<LLPRegistrationPage />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />

        <Route path="/mca-services" element={<MCAService />} />
        <Route path="/pan" element={<PANService />} />
        <Route path="/TAX-Collection-Account-Number" element={<TANServices />} />
        <Route path="/Deducted Source" element={<TDSService />} />
        <Route path="/icome-tax" element={<IncomeTax />} />

        <Route path="/careers" element={<Careers/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/cvform" element={<CvForm/>} />

        <Route path="/footer-contacts" element={<FooterContact/>} />
    
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App
