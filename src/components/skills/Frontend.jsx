import SkillGroup from "./SkillGroup";

const Frontend = () => {
    const skillGroups = [
        [
            { name: "HTML", level: "Intermediate" },
            { name: "CSS", level: "Advanced" },
            { name: "JavaScript", level: "Intermediate" },
        ],
        [
            { name: "React", level: "Basic" },
            { name: "Tailwind", level: "Basic" },
            { name: "Vue", level: "Basic" },
        ],
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend</h3>
            <div className="skill__box">
                {skillGroups.map((group, index) => (
                    <SkillGroup key={index} skills={group} />
                ))}
            </div>
        </div>
    );
};

export default Frontend;
