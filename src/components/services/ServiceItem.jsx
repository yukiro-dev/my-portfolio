import PropTypes from "prop-types";

const ServiceItem = ({
    iconType,
    icon,
    title,
    index,
    toggleTab,
    activeTab,
    description,
    services,
}) => {
    const renderIcon = () => {
        switch (iconType) {
            case "unicons":
                return <i className={`uil ${icon} services__icon`}></i>;
            case "boxicons":
                return <i className={`bx ${icon} services__icon`}></i>;
            case "fontawesome":
                return <i className={`fa ${icon} services__icon`}></i>;
            default:
                return null;
        }
    };

    return (
        <div className="services__content">
            <div>
                {renderIcon()}
                <h3 className="services__title">{title}</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(index)}>
                View More
                <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div
                className={
                    activeTab === index
                        ? "services__modal active-modal"
                        : "services__modal"
                }
            >
                <div className="services__modal-content">
                    <i
                        className="uil uil-times services__modal-close"
                        onClick={() => toggleTab(0)}
                    ></i>
                    <h3 className="services__modal-title">{title}</h3>
                    <p className="services__modal-description">{description}</p>
                    <ul className="services__modal-services grid">
                        {services.map((service, idx) => (
                            <li key={idx} className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    {service}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

ServiceItem.propTypes = {
    iconType: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    toggleTab: PropTypes.func.isRequired,
    activeTab: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
};

export default ServiceItem;
