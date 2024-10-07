import SkillGroup from "./SkillGroup";

const UiUx = () => {
    const skillGroups = [
        [
            { name: "Figma", level: "Advanced" },
            { name: "Prototyping", level: "Basic" },
            { name: "Wireframing", level: "Basic" },
        ],
        [
            { name: "User Research", level: "Basic" },
            { name: "Web Design", level: "Advanced" },
            { name: "Mobile Design", level: "Intermediate" },
        ],
    ];

    return (
        <div className="skills__content">
            <h3 className="skills__title">UI / UX</h3>
            <div className="skill__box">
                {skillGroups.map((group, index) => (
                    <SkillGroup key={index} skills={group} />
                ))}
            </div>
        </div>
    );
};

export default UiUx;
