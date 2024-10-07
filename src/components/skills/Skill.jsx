import PropTypes from "prop-types";

const Skill = ({ name, level }) => {
    return (
        <div className="skill__data">
            <i className="bx bx-badge-check"></i>
            <div>
                <h3 className="skill__name">{name}</h3>
                <span className="skill__level">{level}</span>
            </div>
        </div>
    );
};

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
};

export default Skill;
