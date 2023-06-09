import React from "react";

function MainSection() {
  return (
    <main className="scroll_container">
      <div className="hero_card_text scroll_container_child">
        <div>
          <h1 className="hero_card_text_h1">Hello</h1>
          <h2 className="hero_card_text_h2">Here's who I am & what I do</h2>
        </div>
        <div>
          <p className="hero_card_text_p">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double-click me to add your own content and make changes to the font.
          </p>
          <p className="hero_card_text_p">I'm a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
      </div>
      <div className="hero_card scroll_container_child">
        <div className="hero_card_name_image">
          <img
            className="hero_card_image"
            src="https://media.licdn.com/dms/image/D5635AQElXscXXCnmEA/profile-framedphoto-shrink_200_200/0/1659870835145?e=1686920400&v=beta&t=RP5NJBDupOnHxvjbjYg3ABqq7JYeckGaCriL5amylf0"
            alt="nasir picture smiling"
          />
          <h2>Nasir</h2>
          <h2>Ali</h2>
          <div className="hero_card_line"></div>
        </div>
        <div className="hero_button">
          <button className="hero_button_resume">
            <a href="resume.html">RESUME</a>
          </button>
          <button className="hero_button_projects">
            <a href="projects.html">PROJECTS</a>
          </button>
        </div>
        <div className="hero_social scroll_container_child">
          {/* social links */}
          <a className="hero_social_link" href="https://join.slack.com/t/newworkspace-mhh2606/shared_invite/zt-1a4xeyiau-am5~499oOPi2QCtrHhSaLQ">
            <i className="fa fa-slack"></i>
          </a>
          <a className="hero_social_link" href="https://twitter.com/a_nasir_ali">
            <i className="fa fa-twitter"></i>
          </a>
          <a className="hero_social_link" href="mailto:ali.nasir.turii@outlook.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a className="hero_social_link" href="https://github.com/ali-nasir-ali">
            <i className="fa fa-github fa-1x"></i>
          </a>
        </div>
        <div className="hero_card_bottom_gap"></div>
      </div>
    </main>
  );
}

export default MainSection;
