import React from "react";
import Styles from "../styles/steps.module.css";

function steps() {
  const step = [
    {
      id: "1",
      simg: "http://192.168.0.31:3000/banner.jpg",
      shead: "lorem",
      spara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      simg: "http://192.168.0.31:3000/banner.jpg",
      shead: "lorem",
      spara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "3",
      simg: "http://192.168.0.31:3000/banner.jpg",
      shead: "lorem",
      spara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ];
  return (
    <div className={Styles.step} id="step">
      <div className="container">
        <div className="row">
          <h2 className={Styles.heading}>How it Works</h2>
          {step.map((steps) => (
            <div className="col-md-4" key={steps.id}>
              <div className={Styles.stepsdivision}>
                <img src={steps.simg} className={Styles.stepimg} />
                <h3>{steps.shead}</h3>
                <p>{steps.spara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default steps;
