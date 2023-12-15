import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <br />
        <strong>
          <p>All right received</p>
          <p>@burgershop {new Date().getFullYear()}</p>
        </strong>
      </div>
      <aside>
        <br />
        <h4>Follow Us</h4>
        <a href="https://youtube.com/xyz">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
