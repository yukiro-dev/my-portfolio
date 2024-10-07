import SkillGroup from "./SkillGroup";

const Backend = () => {
    const skillGroups = [
        [
            { name: "Node.js", level: "Basic" },
            { name: "Express", level: "Basic" },
            { name: "MongoDB", level: "Basic" },
        ],
        [
            { name: "PHP", level: "Basic" },
            { name: "MySQL", level: "Basic" },
            { name: "Firebase", level: "Basic" },
        ],
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>
            <div className="skill__box">
                {skillGroups.map((group, index) => (
                    <SkillGroup key={index} skills={group} />
                ))}
            </div>
        </div>
    );
};

export default Backend;
