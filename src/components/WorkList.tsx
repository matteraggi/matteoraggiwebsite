import WorkItem from "./WorkItem"

function WorkList() {
    return (
        <div className="flex flex-column gap-8">
            <WorkItem
                jobTitle="Programmatore Software"
                company="Logica Srl"
                jobType="Part-time"
                startDate="ott 2025"
                location="San Lazzaro di Savena, Bologna, Italia"
                companyLink="https://logicasistemi.com/"
            />
            <div className="w-full h-[4px] bg-[#1a5ba6]"></div>

            <WorkItem
                jobTitle="Sviluppatore Frontend"
                company="Bitapp"
                jobType="Stage"
                startDate="nov 2023"
                endDate="feb 2024"
                location="Bologna, Italia"
                companyLink="https://bitapp.it/"
                techStack={["React", "TypeScript", "TailwindCSS"]}
                description="Questo progetto, per il quale ho sviluppato solo la parte front-end, è un depliant di presentazione Hotel creato per il gruppo Hotel CHC.
                            La piattaforma ha lo scopo di mostrare a potenziali nuovi partner gli Hotel che fanno già parte del gruppo, le loro caratteristiche e i servizi offerti.
                            Il front-end, costruito in react, si basa su una struttura backend interamente in cloud, su AWS, con GraphQL come linguaggio di comunicazione tra le due parti."
            />
        </div>
    )
}

export default WorkList