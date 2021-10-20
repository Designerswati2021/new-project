import React from "react";
import Styles from "../styles/service.module.css";

function about() {
  return (
    <div>
      <div className="container" id="about">
        <div className="row">
          <h2 className={Styles.heading}>lorem Ipsum</h2>
          <div class="col-md-6">
            <img
              src="http://192.168.0.31:3000/banner.jpg"
              style={{ height: "auto", width: "400px" }}
            />
          </div>
          <div class="col-md-6">
            <h2>About Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, voluptatibus.Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Similique, voluptatibus.Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Similique, voluptatibus.Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Similique,
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
