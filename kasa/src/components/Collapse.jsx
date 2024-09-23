import { useState } from 'react';
import "../assets/styles/components/_collapse.scss";
import arrowIcon from '../assets/images/arrowIcon.svg';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);  // Cambia lo stato di visibilità
  };

  return (
    <div className="collapse-container">
      <button className="collapse-title" onClick={toggle}>
        {title}
        <img
            src={arrowIcon}
            alt="Flèche"
            className={`arrow-icon ${isOpen ? 'rotate' : ''}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;