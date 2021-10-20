import React from "react";
import Styles from "../styles/features.module.css";

function features() {
  const features = [
    {
      id: "1",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "2",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "4",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "5",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "6",
      fimg: "http://192.168.0.31:3000/banner.jpg",
      fhead: "lorem",
      fpara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div>
      <div className="container" id="feature">
        <div className="row">
          <h2 className={Styles.featureheading}>Features</h2>
          {features.map((newfe) => (
            <div className="col-md-6 my-2" key={newfe.id}>
              <div className={Styles.main}>
                <img src={newfe.fimg} className={Styles.featureimg} />

                <div className={Styles.contents}>
                  <h3>{newfe.fhead}</h3>
                  <p>{newfe.fpara}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default features;
