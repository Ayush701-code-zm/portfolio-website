// import React from "react";
// // import Navbar from "../navBar/index.jsx";
// // import Header from "./Components/Header";
// // import Footer from "./Components/Footer";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import Contact from "../Pages/Contact";
// import Projects from "../Pages/Projects";
// import Technologies from "../Pages/Technologies";

// // import Footer from "../Footer/index.jsx";

// const Page = () => {
//   return (
//     <div className="w-full flex flex-col gap-16 py-16 pt-5 ">
//       <Home />
//       <About />

//       <Projects />
//       <Technologies />
//       <Contact />
//     </div>
//   );
// };

// export default Page;

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = () => {
  const location = useLocation();

  // This will run whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
