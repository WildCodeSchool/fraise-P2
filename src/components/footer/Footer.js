import React from "react";
import Facebook from "../../Assets/facebook.png";
import Twitter from "../../Assets/twitter.png";
import Instagram from "../../Assets/instagram.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <h3>Nutritionnistes </h3>
        <ul>
          <li>
            <a href="https://menthebanane.com/" target="_blank"><span className="footer-arrow">&gt;</span> Menthe Banane</a>
          </li>
          <li>
            <a href="http://www.nutrition-dietetique.fr/" target="_blank">
            <span className="footer-arrow">&gt;</span> Nutrition dietetique
            </a>
          </li>
          <li>
            <a href="https://minceur-harmonie.com/" target="_blank"><span className="footer-arrow">&gt;</span> Minceur harmonie</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Articles scientifiques </h3>
        <ul>
          <li>
            <a href="https://www.bibl.ulaval.ca/web/nutrition-humaine/articles" target="_blank">
            <span className="footer-arrow">&gt;</span> Nutrition Humaine
            </a>
          </li>
          <li>
            <a href="http://www.nutrition-dietetique.fr/" target="_blank">
            <span className="footer-arrow">&gt;</span>  Nutrition dietetique
            </a>
          </li>
          <li>
            <a href="https://www.nutripro.nestle.fr/article/prise-en-charge-d-allergies-alimentaires" target="_blank">
            <span className="footer-arrow">&gt;</span>  Prise en charge nutritionelle
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <h3>Santé </h3>
        <ul>
          <li>
            <a href="https://mangerbouger.com/" target="_blank"><span className="footer-arrow">&gt;</span> Menthe Banane</a>
          </li>
          <li>
            <a href="https://foodmap.fr/" target="_blank"><span className="footer-arrow">&gt;</span> Fodmap</a>
          </li>
          <li>
            <a href="https://foodmap.fr/" target="_blank"><span className="footer-arrow">&gt;</span> Fodmap</a>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <h3>Contact us </h3>
        <ul className="social-medias">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                className="logo_sociaux"
                src={Facebook}
                alt="logo Facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="_blank">
              <img className="logo_sociaux" src={Twitter} alt="logo Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                className="logo_sociaux"
                src={Instagram}
                alt="logo Instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
