import Code from "./Code";
import Live from "./Live";

const PortfolioCardReverse = (props: any) => {
  return (
    <div className="box box-1">
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
        </div>
      </div>
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
    </div>
  );
};

export default PortfolioCardReverse;
