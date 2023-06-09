import React from "react";

function Header() {
  return (
    <header className="name_box">
      <div className="logo_box"></div>
      <div className="name_maya">
        <a className="" href="index.html">
          <h2>nasir ali</h2>
        </a>
      </div>
      <p>/</p>
      <div className="name_manager">
        <a className="" href="index.html">
          <p>SOFTWARE DEVELOPER</p>
        </a>
      </div>
      <nav>
        <ul className="navbar" id="navbar">
          <li>
            <a id="nav_bar_close" href="#">
              <i className="fa fa-close"></i>
            </a>
          </li>
          <li>
            <a href="index.html">ABOUT ME</a>
          </li>
          <li>
            <a href="resume.html">RESUME</a>
          </li>
          <li>
            <a href="projects.html">PROJECTS</a>
          </li>
          <li>
            <a href="contact.html">CONTACT</a>
          </li>
        </ul>
      </nav>
      <a href="#navbar">
        <div className="ham_bar_box">
          <div className="ham_bar_one"></div>
          <div className="ham_bar_two"></div>
          <div className="ham_bar_three"></div>
        </div>
      </a>
    </header>
  );
}

export default Header;
