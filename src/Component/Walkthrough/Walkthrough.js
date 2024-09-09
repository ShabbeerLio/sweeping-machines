import React from "react";
import "./Walkthrough.css";
import Form from "../Form/Form";
import walkimg from "../../Assets/Walkthrough/walkthrough.png"

const Walkthrough = () => {
  return (
    <div className="Walkthrough">
      <div className="Walkthrough-main">
        <h2>Cost-Effective Solutions for Tough Cleaning Jobs</h2>
        <div className="walkthrough-item">
          <div className="walkthrough-left">
            <img src={walkimg} alt="" />
          </div>
          <div className="walkthrough-right">
            <div className="walkthrough-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walkthrough;
