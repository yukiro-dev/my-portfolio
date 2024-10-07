import PropTypes from "prop-types";

import Skill from "./Skill";

const SkillGroup = ({ skills }) => {
    return (
        <div className="skill__group">
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
    );
};

SkillGroup.propTypes = {
    skills: PropTypes.array.isRequired,
};

export default SkillGroup;
