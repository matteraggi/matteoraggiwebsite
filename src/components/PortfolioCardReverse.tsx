import { NavLink } from "react-router-dom";
import DownloadProject from "./DownloadProject";
import Live from "./icons/Live";
import Github from "./icons/Github";

const PortfolioCardReverse = (props: any) => {
  return (
    <div className="box box-1">
      <div className="box-text">
        <NavLink to={props.route} className="no-subline">
          <h3 className="sub-headline">{props.heading}</h3>
        </NavLink>
        <p>{props.text}</p>
        <div className="links">
          {props.code && (
            <a target="_blank" href={props.linkcode} rel="noreferrer">
              <p>Code</p>
              <Github />
            </a>
          )}
          {props.website && (
            <a target="_blank" href={props.linkwebsite} rel="noreferrer">
              <p>Sito Web</p>
              <Live />
            </a>
          )}
          {props.download && (
            <div>
              <p>APK</p>
              <DownloadProject
                fileDir={props.downloadfile}
                fileName={props.fileName}
              />
            </div>
          )}
        </div>
      </div>
      <div className="box-img">
        {props.website ? (
          <a target="_blank" href={props.linkwebsite} rel="noreferrer">
            <img
              src={props.sourceimage}
              alt="website"
              className="scrolling"
              loading="lazy"
              width="100%"
              height="auto"
            />
          </a>
        ) : (
          <img
            src={props.sourceimage}
            alt="website"
            className="scrolling"
            loading="lazy"
            width="100%"
            height="auto"
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioCardReverse;
