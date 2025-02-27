import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    node,
    express,
    bootstrap,
    mongodb,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  return (
    <main
      className="container mx-auto max-width pt-10 pb-20"
      style={{
        /* Add global styles here */
      }}
    >
      <section>
        <h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          style={{
            /* Add header styles here */
          }}
        >
          Tech Stack
        </h1>
        <p
          className="text-content py-2 lg:max-w-3xl"
          style={{
            /* Add paragraph styles here */
          }}
        >
          Technologies I've been working with recently
        </p>
      </section>
      <section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
        style={{
          /* Add grid styles here */
        }}
      >
        <img
          src={html}
          title="html"
          alt=""
          className="image-icon"
          style={{
            /* Add image styles here */
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={css}
          title="CSS"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={js}
          title="JavaScript"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={react}
          title="React"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={node}
          title="Node"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={express}
          title="Express"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        {/* <img src={mongodb} title="MongoDB" alt="" className="image-icon" style={{ width: "50px", height: "50px", objectFit: "contain", margin: "10px" }} /> */}
        <img
          src={bootstrap}
          title="Bootstrap"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={mongodb}
          title="MongoDB"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        {/* <img
          src={sass}
          title="SASS"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        /> */}
      </section>
      <section>
        <h1
          className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          style={{
            /* Add header styles here */
          }}
        >
          Tools
        </h1>
      </section>
      <section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
        style={{
          /* Add grid styles here */
        }}
      >
        <img
          src={vscode}
          title="Visual Studio Code"
          alt=""
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={git}
          title="Git"
          alt="Git"
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={github}
          title="Github"
          alt="Github"
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={figma}
          title="Figma"
          alt="Figma"
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={npm}
          title="NPM"
          alt="NPM"
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
        <img
          src={postman}
          title="Postman"
          alt="Postman"
          className="image-icon"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
            margin: "10px",
          }}
        />
      </section>
    </main>
  );
}

export default Technologies;
