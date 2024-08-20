import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./footer.module.css"; // Importing CSS module

const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      {" "}
      {/* Using CSS module */}
      <div className={styles.footer_inner_container}>
        {" "}
        {/* Using CSS module */}
        <div className={styles.footer_icons}>
          {" "}
          {/* Using CSS module */}
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_data}>
          {" "}
          {/* Using CSS module */}
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles.service_code}>
          {" "}
          {/* Using CSS module */}
          <p>Service Code</p>
        </div>
        <div className={styles.copy_write}>
          {" "}
          {/* Using CSS module */}
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
