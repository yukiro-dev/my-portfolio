import "./services.css";
import { useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const servicesData = [
        {
            iconType: "boxicons",
            icon: "bx-palette",
            title: "UI/UX Designer",
            description:
                "Service with 1 year of experience. Providing stunning designs and user experiences.",
            services: [
                "I design websites and web applications.",
                "I design mobile applications.",
                "I create design systems.",
            ],
        },
        {
            iconType: "boxicons",
            icon: "bx-code-alt",
            title: "Frontend Developer",
            description:
                "Service with 1 year of experience. Creating responsive and interactive web applications.",
            services: [
                "I develop web applications.",
                "I create responsive websites.",
                "I implement design systems.",
            ],
        },
        {
            iconType: "boxicons",
            icon: "bx-joystick",
            title: "Game Developer",
            description:
                "Still learning, but I'm passionate about creating games.",
            services: [
                "I create games.",
                "I am ready to collaborate on projects.",
            ],
        },
    ];

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                {servicesData.map((service, index) => (
                    <ServiceItem
                        key={index}
                        iconType={service.iconType}
                        icon={service.icon}
                        title={service.title}
                        index={index + 1}
                        toggleTab={toggleTab}
                        activeTab={toggleState}
                        description={service.description}
                        services={service.services}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
