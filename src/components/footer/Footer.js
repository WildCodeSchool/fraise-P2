import React from "react";
import Facebook from "../../Assets/facebook.png";
import Twitter from "../../Assets/twitter.png";
import Instagram from "../../Assets/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div>
          <ul class="nutrition">
            <p>Nutritionnistes </p>
            <li>
              <a href="https://menthebanane.com/">Menthe Banane"</a>
            </li>
            <li>
              <a href="http://www.nutrition-dietetique.fr/">
                Nutrition dietetique"
              </a>
            </li>
            <li>
              <a href="https://minceur-harmonie.com/">Minceur harmonie"</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="articles">
            <p>Articles scientifiques </p>
            <li>
              <a href="https://www.bibl.ulaval.ca/web/nutrition-humaine/articles">
                Nutrition Humaine"
              </a>
            </li>
            <li>
              <a href="http://www.nutrition-dietetique.fr/">
                Nutrition dietetique"
              </a>
            </li>
            <li>
              <a href="https://www.nutripro.nestle.fr/article/prise-en-charge-d-allergies-alimentaires">
                Prise en charge nutritionelle"
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="sante">
            <p>Santé </p>
            <li>
              <a href="https://mangerbouger.com/">Menthe Banane"</a>
            </li>
            <li>
              <a href="https://foodmap.fr/">Fodmap"</a>
            </li>
          </ul>
          <ul className="social_list">
            <li className="social_list_li">
              <img
                className="logo_sociaux"
                src={Facebook}
                alt="logo Facebook"
              />
            </li>
            <li className="social_list_li">
              <img className="logo_sociaux" src={Twitter} alt="logo Twitter" />
            </li>
            <li className="social_list_li">
              <img
                className="logo_sociaux"
                src={Instagram}
                alt="logo Instagram"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
