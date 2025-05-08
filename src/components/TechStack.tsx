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


// Mappa delle tecnologie disponibili
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


const TechStack = (props: any) => {
    return (
        <div className="w-full md:w-2/5 bg-gray-100 rounded-lg flex flex-col items-center justify-center py-4 mb-8 sm:mb-0">
            <h2 className="heading-3 mb-4">Tech Stack</h2>
            {props.techstack.map((tech: any) => {
                const techData = techMap[tech.toLowerCase()];
                if (!techData) return null;
                const { Icon, label, size } = techData;
                return (
                    <div key={tech} className="flex w-[60%] gap-4 justify-center mb-2">
                        <Icon width={size} height={size} />
                        <p className="!text-xl">{label}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TechStack;
