// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Page from "./layout/index";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Page />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/index";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import ScrollToTop from "./Components/ScroolTop"; // Import the new component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="technologies" element={<Technologies />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
