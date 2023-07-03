import { BrowserRouter, Routes, Route } from "react-router-dom"
import './app.css';
import { Home, AboutUs, OurTeam, JoinUs, Faq, DonationCases, Blog, ContactUs, PageNotFound } from "./pages";
import { Footer, Header } from "./components";

function App() {
  return (
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="our-team" element={<OurTeam />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="faq" element={<Faq />} />
        <Route path="donation-cases" element={<DonationCases />} />
        <Route path="news" element={<Blog />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
