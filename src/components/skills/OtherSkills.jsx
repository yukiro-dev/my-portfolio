import SkillGroup from "./SkillGroup";

const OtherSkills = () => {
    const skillGroups = [
        [
            { name: "Git", level: "Intermediate" },
            { name: "Linux", level: "Intermediate" },
            { name: "Docker", level: "Basic" },
        ],
        [
            { name: "English Language", level: "C1" },
            { name: "Arabic Language", level: "Native" },
            { name: "French Language", level: "B1" },
        ],
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Other Skills</h3>
            <div className="skill__box">
                {skillGroups.map((group, index) => (
                    <SkillGroup key={index} skills={group} />
                ))}
            </div>
        </div>
    );
};

export default OtherSkills;
