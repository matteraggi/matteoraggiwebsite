import GithubWhite from "./icons/GithubWhite";
import InstagramWhite from "./icons/InstagramWhite";
import LinkedinWhite from "./icons/LinkedinWhite";

const Footer = () => {
  return (
    <footer>
      <div className="contenitore">
        <div className="footerclass">
          <h3 className="footerh3">
            Copyright © 2023. All rights are reserved
          </h3>
          <div className="footer-icons">
            <LinkedinWhite />
            <InstagramWhite />
            <GithubWhite />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
