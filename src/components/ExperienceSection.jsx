const WorkExperience = [
    {
        company: "Yahoo EMEA Ltd.",
        position: "Full Stack Software Engineer Intern",
        duration: "Feb 2023 - Sep 2023",
        description: [
            "Co-developed ingestion pipelines to pull articles and their related content from external sources.",
            "Automated data validation of ingested articles using connection pooling and scheduled tasks.",
            "Built and deployed a user-reporting API integrated with the Admin Dashboard, improving issue visibility."
        ]
    },
];


export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Work <span className="text-primary">Experience</span>
                </h2>
                <div className="relative mt-12 max-w-4xl mx-auto">
                    {WorkExperience.map((experience, key) => (
                        <div key={key}>
                            <div className="absolute left-4 top-0 w-1 h-full bg-border -translate-x-1/2" />
                            <div className="relative pl-8 sm:pl-12 py-6 group">
                                <div className="flex items-center absolute left-4 top-4 tranform -translate-x-1/2">
                                    <div className="h-8 w-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                                        <div className="h-3 w-3 rounded-full bg-primary transition-all duration-300 group-hover:scale-125">

                                        </div>
                                    </div>
                                </div>
                                <div className="group p-10 bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                    <div className="flex items-center justify-between mb-6 text-muted-foreground">
                                        <h4 className="text-lg font-medium text-primary">
                                            {experience.company}
                                        </h4>

                                        <h3 className="text-2xl font-semibold">
                                            {experience.position}
                                        </h3>

                                        <p className="text-lg font-medium text-primary">
                                            {experience.duration}
                                        </p>
                                    </div>
                                    <div className="relative h-1 w-full bg-border -translate-y-1/2 mb-6" />

                                    <ul className="list-disc text-muted-foreground text-left pl-6 space-y-3">
                                        {experience.description.map((desc, index) => (
                                            <li key={index}>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}