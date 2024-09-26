import { useState } from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/_collapse.scss";
import arrowIcon from "../assets/images/arrow-icon.svg";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen); // Cambia lo stato di visibilità
    };

    return (
        <div className="collapse-container">
            <button className="collapse-title" onClick={toggle}>
                {title}
                <img src={arrowIcon} alt="Flèche" className={`arrow-icon ${isOpen ? "rotate" : ""}`} />
            </button>
            <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>{children}</div>
        </div>
    );
};
Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Collapse;
