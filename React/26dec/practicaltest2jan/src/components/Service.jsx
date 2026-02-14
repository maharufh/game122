import React, { useState } from "react";

function Service() {
  const [activeService, setActiveService] = useState("web");

  const serviceData = {
    web: {
      title: "Web Development",
      desc: "We build fast, responsive, and SEO-friendly websites using HTML, CSS, JavaScript, and React."
    },
    design: {
      title: "UI / UX Design",
      desc: "We design clean and modern user interfaces with a focus on user experience and accessibility."
    },
    development: {
      title: "Software Development",
      desc: "We develop scalable applications with proper architecture, performance, and security."
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="mb-4">Our Services</h3>

 
      <div className="row mb-4">
        <div className="col-md-2">
          <button
            className={`btn w-100 ${activeService === "web" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveService("web")}
          >
            Web
          </button>
        </div>

        <div className="col-md-4">
          <button
            className={`btn w-100 ${activeService === "design" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveService("design")}
          >
            Design
          </button>
        </div>

        <div className="col-md-4">
          <button
            className={`btn w-100 ${activeService === "development" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveService("development")}
          >
            Development
          </button>
        </div>
      </div>

 
      <div className="card p-4 shadow">
        <h4>{serviceData[activeService].title}</h4>
        <p className="mt-2">{serviceData[activeService].desc}</p>
      </div>
    </div>
  );
}

export default Service;
