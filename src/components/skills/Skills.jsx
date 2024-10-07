import "./skills.css";
import Frontend from "./Frontend";
// import Backend from "./Backend";
import UiUx from "./UiUx";
import OtherSkills from "./OtherSkills";
const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Skills</span>

            <div className="skills__container container grid">
                <Frontend />

                <UiUx />

                <OtherSkills />
            </div>
        </section>
    );
};

export default Skills;
