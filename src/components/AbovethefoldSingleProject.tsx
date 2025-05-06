import Live from "./icons/Live";
import DownloadProject from "./DownloadProject";
import Github from "./icons/Github";

const AbovethefoldSingleProject = (props: any) => {
  return (
    /*
      display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: center;

  @media (max-width: 900px) {
    height: 200px
  }
    */
    <div className="flex flex-col h-[200px] justify-center items-center relative w-full text-center md:h-[200px]">
      <div className="mt-[75px] py-[50px] flex flex-row h-[400px] justify-start items-start relative w-[80%] text-center gap-[50px] max900:h-auto max900:py-[110px] max900:pt-[30px] max900:pb-[10px]">
        <h1 className="heading-2">{props.title}</h1>
        <div className="flex items-center justify-evenly gap-[10px] h-auto">
          {props.code && (
            <a target="_blank" href={props.linkcode} rel="noreferrer">
              <Github width="50" height="50" />
            </a>
          )}

          {props.website && (
            <a target="_blank" href={props.linkwebsite} rel="noreferrer">
              <Live />
            </a>
          )}
          {props.download && (
            <div>
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

export default AbovethefoldSingleProject;
