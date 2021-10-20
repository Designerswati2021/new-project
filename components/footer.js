import React from "react";
import Styles from "../styles/footer.module.css";

function footer() {
  return (
    <div className={Styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center py-2">
              © Copyright 2020, All Rights Reserved Wingshield Technologies®
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
