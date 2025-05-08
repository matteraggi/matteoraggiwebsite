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
import Github from "./icons/Github"; // tua icona GitHub
import Live from "./icons/Live";     // tua icona "sito live"
import DownloadProject from "./DownloadProject"; // il tuo componente

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
    fileName = ""
}: TechStackProps) => {
    return (
        <div className="w-full md:w-2/5 bg-gray-100 rounded-lg flex flex-col items-center justify-center py-6 px-4 mb-8 sm:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-col gap-2 w-full items-center">
                {techstack.map((tech) => {
                    const techData = techMap[tech.toLowerCase()];
                    if (!techData) return null;
                    const { Icon, label, size } = techData;
                    return (
                        <div key={tech} className="flex items-center gap-4 w-[60%] justify-center">
                            <Icon width={size} height={size} />
                            <p className="text-xl">{label}</p>
                        </div>
                    );
                })}
            </div>

            {(code || website || download) && (
                <div className="mt-6 flex gap-6 items-center justify-center flex-wrap">
                    {code && linkcode && (
                        <a
                            href={linkcode}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github width={35} height={35} />
                        </a>
                    )}

                    {website && linkwebsite && (
                        <a
                            href={linkwebsite}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Live width={35} height={35} />
                        </a>
                    )}

                    {download && downloadfile && fileName && (
                        <DownloadProject fileDir={downloadfile} fileName={fileName} />
                    )}
                </div>
            )}
        </div>
    );
};

export default TechStack;
