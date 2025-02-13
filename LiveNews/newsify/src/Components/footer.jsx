import React from "react";
import Home from "../pages/home";
import("./footer.css");
const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="bottomlinks">
          <h4>Business</h4>
          <ul>
            <li>
              <a href="/">Congress</a>
            </li>
            <li>
              <a href="/">Security</a>
            </li>
            <li>
              <a href="/">The nine</a>
            </li>
            <li>
              <a href="/">Trumpmerica</a>
            </li>
            <li>
              <a href="/">State</a>
            </li>
          </ul>
        </div>
        <div class="bottomlinks">
          <h4>Health</h4>
          <ul>
            <li>
              <a href="/">Nutrition</a>
            </li>
            <li>
              <a href="/">Mental Health</a>
            </li>
            <li>
              <a href="/">Fitness</a>
            </li>
            <li>
              <a href="/">Medical Research</a>
            </li>
            <li>
              <a href="/">Wellness</a>
            </li>
          </ul>
        </div>
        <div class="bottomlinks">
          <h4>Technology</h4>
          <ul>
            <li>
              <a href="/">Startup</a>
            </li>
            <li>
              <a href="/">Culture</a>
            </li>
            <li>
              <a href="/">Future</a>
            </li>
            <li>
              <a href="/">Gadget</a>
            </li>
            <li>
              <a href="/">Bussiness</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;
