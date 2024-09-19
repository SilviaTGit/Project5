import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function Card({ title, cover, id }) {
  return (
    <div className="card">
      <NavLink to={`/apartments/${id}`}>
      <div className="card-image-wrapper">
        <img src={cover} alt={title} className="card-image" />
      </div>
        <h3 className="card-title">{title}</h3>
      </NavLink>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;