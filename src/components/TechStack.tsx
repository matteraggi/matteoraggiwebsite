import Nodejs from "./icons/Nodejs";
import React from "./icons/React";

const TechStack = () => {
    return (
        <div className="w-full sm:w-1/4 bg-gray-100 rounded-lg flex flex-col items-center justify-center py-4 mb-8 sm:mb-0">
            <h2 className="heading-3 mb-4">Tech Stack</h2>
            <div className="flex w-[60%] gap-2 justify-center">
                <React width="35" height="35" />
                <p className="!text-2xl">React</p>
            </div>
            <div className="flex w-[60%] gap-2 justify-center">
                <Nodejs width="35" height="35" />
                <p className="!text-2xl">NodeJs</p>
            </div>
        </div>
    );
};

export default TechStack;