import { Link } from "react-router-dom";

const AbovethefoldSingleProject = (props: any) => {
  return (
    <div className="flex flex-col h-[150px] sm:h-[200px] justify-center items-center relative w-full text-center">
      <div className="mt-[75px] flex h-[250px] sm:h-[400px] justify-start items-start relative w-full text-left gap-[50px] ">
        <Link to="/progetti">
          <img
            alt="arrow-back"
            src="/arrow.svg"
            className="w-[50px] h-auto"
            loading="lazy"
          />
        </Link>
        <h1 className="heading-2 whitespace-nowrap">{props.title}</h1>
        <div className="flex-1 h-[4px] bg-black hidden sm:block" />
      </div>
    </div>
  );
};

export default AbovethefoldSingleProject;
