import Code from "./Code";
import DownloadProject from "./DownloadProject";
import Live from "./Live";

const PortfolioCard = (props: any) => {
  return (
    <div className="box box-1 reverse">
      <div className="box-img">
        <a target="_blank" href={props.linkwebsite} rel="noreferrer">
          <img
            src={props.sourceimage}
            alt="website"
            className="scrolling"
            loading="lazy"
            width="100%"
            height="auto"
          ></img>
        </a>
      </div>
      <div className="box-text">
        <h3 className="sub-headline">{props.heading}</h3>
        <p>{props.text}</p>
        <div className="links">
          {props.code && (
            <a target="_blank" href={props.linkcode} rel="noreferrer">
              <p>Code</p>
              <Code />
            </a>
          )}

          {props.website && (
            <a target="_blank" href={props.linkwebsite} rel="noreferrer">
              <p>Sito Live</p>
              <Live />
            </a>
          )}
          {props.download && (
            <div>
              <p>Download</p>
              <DownloadProject
                fileDir={props.downloadfile}
                fileName={props.fileName}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
