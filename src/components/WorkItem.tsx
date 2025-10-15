interface WorkItemProps {
    jobTitle: string;
    company: string;
    companyLink?: string;
    jobType: string;
    startDate: string;
    endDate?: string;
    location: string;
    techStack?: string[];
    description?: string;
}

const WorkItem: React.FC<WorkItemProps> = ({
    jobTitle,
    company,
    companyLink,
    jobType,
    startDate,
    endDate,
    location,
    techStack,
    description,
}) => {
    return (
        <div className="flex items-start gap-4">
            {/* Pallino blu */}
            <div className="w-5 h-5 mt-2 rounded-full bg-[#1a5ba6] flex-shrink-0"></div>

            {/* Contenuto */}
            <div className="flex flex-col items-center sm:items-start">
                {/* Titolo + azienda */}
                <div className="flex sm:items-start items-center flex-col">
                    <h3 className="text-lg font-semibold text-gray-800">{jobTitle}</h3>
                    <div className="flex flex-row items-center sm:items-start gap-2 h-6 mb-1">
                        {companyLink ? (
                            <a
                                href={companyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:underline leading-normal"
                            >
                                {company}
                            </a>
                        ) : (
                            <span className="text-black">{company}</span>
                        )}
                        <div>•</div>
                        <div>{jobType}</div>
                    </div>
                </div>

                {/* Date */}
                <div className="text-sm text-gray-600">
                    {startDate} - {endDate || "Presente"}
                </div>

                {/* Luogo */}
                <div className="text-sm text-gray-600">{location}</div>

                {/* Tech stack */}
                {techStack && techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 my-3">
                        {techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="bg-[#1a5ba6] text-gray-100 text-xs px-2 py-1 rounded-full"
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                )}

                {/* Descrizione */}
                {description && (
                    <div className="text-gray-600 text-md font-normal">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkItem;
