import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const buttonRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        buttonRefs.current,
        {
          y: 50,
          opacity: 0,
          stagger: 0.3,
          duration: 1,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
        {/* Buttons Section */}
        <div className="mt-5 flex space-x-4">
          <a href="contact" ref={el => buttonRefs.current[0] = el} className="inline-block">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
              Contact Me
            </button>
          </a>
          <a href="https://drive.google.com/file/d/1E-OCOkrhNC__YAoRXs6-X37lTjJkvRhN/view?usp=sharing" ref={el => buttonRefs.current[1] = el} target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-200">
              My Resume
            </button>
          </a>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Pavan MG" />
      </div>
    </main>
  );
}

export default Home;
