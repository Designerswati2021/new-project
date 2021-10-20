import React, { useState } from "react";
import Styles from "../styles/banner.module.css";

import Button from "@mui/material/Button";

function banner() {
  const [fname, setFname] = useState("");
  const [email, setemail] = useState("");
  const [lname, setlname] = useState("");
  const [number, setnumber] = useState("");
  const [nameerrmsg, setnameerrmsg] = useState("");
  const [emailerrmsg, setemailerrmsg] = useState("");
  const [lnameerrmsg, setlnameerrmsg] = useState("");
  const [numbererrmsg, setnumbererrmsg] = useState("");
  function validateName(e) {
    setFname(e.target.value);
  }
  function validateEmail(e) {
    setemail(e.target.value);
  }
  function validatelname(e) {
    setlname(e.target.value);
  }
  function validatenumber(e) {
    setnumber(e.target.value);
  }
  function submitForm(e) {
    e.preventDefault();
    if (fname === "") {
      setnameerrmsg("First Name is empty");
    } else if (fname.length <= 5) {
      setnameerrmsg("invalid");
    }
    if (email === "") {
      setemailerrmsg("email is empty");
    } else if (!email.includes("@")) {
      emailerrmsg("invalid");
    }
    if (lname === "") {
      setlnameerrmsg("lnmae is empty");
    } else if (lname.length <= 5) {
      setlnameerrmsg("invalid");
    }
    if (number === "") {
      setnumbererrmsg("number is empty");
    } else if (number.length <= 5) {
      setnumbererrmsg("invalid");
    } else {
      setnameerrmsg("");
      setemailerrmsg("");
      setlnameerrmsg("");
      setnumbererrmsg("");
    }
  }
  return (
    <div>
      <div className={Styles.banner}>
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{ paddingTop: "4em" }}>
              <h4 style={{ color: "white", opacity: "0.8 " }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ad?
              </h4>
              <p style={{ color: "white", opacity: "0.8 " }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                sit.lorem10Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Error, sit.lorem10
              </p>
            </div>
            <div className="col-md-6">
              <div className={Styles.contactform}>
                <h5 className={Styles.contact}>Contact</h5>
                <div className="container">
                  <form onSubmit={submitForm}>
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="firstname"
                              value={fname}
                              onChange={validateName}
                            />
                            <label htmlFor="floatingInput">First Name</label>
                            <span className="text-danger">{nameerrmsg}</span>
                          </div>
                          <div className="form-floating">
                            <input
                              type="email"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Password"
                              value={email}
                              onChange={validateEmail}
                            />
                            <label htmlFor="floatingPassword">Email</label>
                            <span className="text-danger">{emailerrmsg}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name"
                              value={lname}
                              onChange={validatelname}
                            />
                            <label htmlFor="floatingInput"> Last Name </label>
                            <span className="text-danger">{lnameerrmsg}</span>
                          </div>
                          <div className="form-floating">
                            <input
                              type="phone"
                              className="form-control"
                              id="floatingPassword"
                              placeholder="phoneno"
                              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                              value={number}
                              onChange={validatenumber}
                            />
                            <label htmlFor="floatingPassword">
                              Phone Number
                            </label>
                            <span className="text-danger">{numbererrmsg}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={submitForm}
                        className={Styles.submit}
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default banner;
