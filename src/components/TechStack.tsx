import AWS from "./icons/AWS";
import Cplusplus from "./icons/C++";
import Figma from "./icons/Figma";
import Flutter from "./icons/Flutter";
import GraphQL from "./icons/GraphQL";
import Kotlin from "./icons/Kotlin";
import MongoDB from "./icons/MongoDB";
import Nextjs from "./icons/Nextjs";
import Nodejs from "./icons/Nodejs";
import React from "./icons/React";
import ReactNative from "./icons/ReactNative";
import Supabase from "./icons/Supabase";
import Swift from "./icons/Swift";
import Tailwind from "./icons/Tailwind";
import DownloadProject from "./DownloadProject";
import GithubWhite from "./icons/GithubWhite";
import LiveWhite from "./icons/LiveWhite";
import Live from "./icons/Live";
import Github from "./icons/Github";
import Solidity from "./icons/Solidity";

const techMap: { [key: string]: { label: string; Icon: React.FC<React.SVGProps<SVGSVGElement>>, size: number } } = {
    react: { label: 'React', Icon: React, size: 35 },
    nextjs: { label: 'NextJs', Icon: Nextjs, size: 35 },
    nodejs: { label: 'NodeJs', Icon: Nodejs, size: 35 },
    mongodb: { label: 'MongoDB', Icon: MongoDB, size: 35 },
    kotlin: { label: 'Kotlin', Icon: Kotlin, size: 35 },
    aws: { label: 'AWS', Icon: AWS, size: 35 },
    figma: { label: 'Figma', Icon: Figma, size: 35 },
    cplusplus: { label: 'C++', Icon: Cplusplus, size: 35 },
    graphql: { label: 'GraphQL', Icon: GraphQL, size: 35 },
    tailwindcss: { label: 'Tailwind CSS', Icon: Tailwind, size: 35 },
    flutter: { label: 'Flutter', Icon: Flutter, size: 35 },
    supabase: { label: 'Supabase', Icon: Supabase, size: 35 },
    swift: { label: 'Swift', Icon: Swift, size: 35 },
    reactnative: { label: 'React Native', Icon: ReactNative, size: 35 },
    solidity: { label: 'Solidity', Icon: Solidity, size: 35 },
};

type TechStackProps = {
    techstack: string[];
    code?: boolean;
    website?: boolean;
    download?: boolean;
    linkcode?: string;
    linkwebsite?: string;
    downloadfile?: string;
    fileName?: string;
};

const TechStack = ({
    techstack,
    code = false,
    website = false,
    download = false,
    linkcode = "",
    linkwebsite = "",
    downloadfile = "",
    fileName = "",
}: TechStackProps) => {
    return (
        <div className="flex flex-col mb-4 sm:my-4">
            <div className="w-full relative h-[70px]">
                {/* Banda a stendardo */}
                <div className="absolute inset-0 bg-[#0d3b66] flex items-center sm:px-14 
          [clip-path:polygon(0%_0%,100%_0%,98%_50%,100%_100%,0%_100%,2%_50%)]">

                    {/* Contenuto barra */}
                    <div className="flex w-full justify-center md:justify-between items-center max-w-[1200px] mx-auto">

                        {/* Icone */}
                        <div className="flex gap-6 items-center flex-wrap justify-center md:justify-start">
                            {techstack.map((tech) => {
                                const techData = techMap[tech.toLowerCase()];
                                if (!techData) return null;
                                const { Icon, label, size } = techData;
                                return (
                                    <div key={tech} className="flex items-center sm:gap-2">
                                        <Icon width={size} height={size} />
                                        <div className="hidden sm:inline text-lg text-white">
                                            {label}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Links (solo desktop dentro barra) */}
                        {(code || website || download) && (
                            <div className="hidden md:flex gap-6 items-center">
                                {code && linkcode && (
                                    <a href={linkcode} target="_blank" rel="noreferrer">
                                        <GithubWhite />
                                    </a>
                                )}
                                {website && linkwebsite && (
                                    <a href={linkwebsite} target="_blank" rel="noreferrer">
                                        <LiveWhite width={35} height={35} />
                                    </a>
                                )}
                                {download && downloadfile && fileName && (
                                    <DownloadProject
                                        fileDir={downloadfile}
                                        fileName={fileName}
                                        color={"white"}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Links (solo mobile sotto barra) */}
            {(code || website || download) && (
                <div className="flex md:hidden gap-6 items-center justify-center flex-wrap mt-4">
                    {code && linkcode && (
                        <a href={linkcode} target="_blank" rel="noreferrer">
                            <Github />
                        </a>
                    )}
                    {website && linkwebsite && (
                        <a href={linkwebsite} target="_blank" rel="noreferrer">
                            <Live width={35} height={35} />
                        </a>
                    )}
                    {download && downloadfile && fileName && (
                        <DownloadProject fileDir={downloadfile} fileName={fileName} color={"black"} />
                    )}
                </div>
            )}
        </div>
    );
};



export default TechStack;
