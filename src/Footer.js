import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_contact">
        <div>
          <h3>Call</h3>
          <p>123-456-7890</p>
        </div>
        <div>
          <h3>Write</h3>
          <p>
            <a href="mailto:ali.nasir.turii@gmail.com">ali.nasir.turii@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer_social">
        <h3>Follow</h3>
        {/* social links */}
        <a className="hero_social_link" href="https://join.slack.com/t/newworkspace-mhh2606/shared_invite/zt-1a4xeyiau-am5~499oOPi2QCtrHhSaLQ">
          <i className="fa fa-slack"></i>
        </a>
        <a className="hero_social_link" href="https://twitter.com/a_nasir_ali">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="hero_social_link" href="mailto:ali.nasir.turii@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
        <a className="hero_social_link" href="https://github.com/ali-nasir-ali">
          <i className="fa fa-github fa-1x"></i>
        </a>
      </div>
      <div className="footer_copy_right">
        <p className="para">
          &copy; {new Date().getFullYear()} MPL v.2.0 | programmed by{" "}
          <a href="https://github.com/ali-nasir-ali">
            <span style={{ color: "var(--primary-color)" }}>nasir</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
