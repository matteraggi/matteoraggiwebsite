import GithubWhite from "./GithubWhite";
import InstagramWhite from "./InstagramWhite";
import LinkedinWhite from "./LinkedinWhite";

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
