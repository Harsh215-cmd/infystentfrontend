import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUsSection from "./AboutUsSection"
import Footer from "./Footer"
import Homepage from "./Homepage"
import Navbar from "./Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUsSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
