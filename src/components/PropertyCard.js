import React, { useEffect } from "react";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="propertyDetails">
      <p>{title}</p>
      <p>{type}</p>
      <p>{bathrooms}</p>
      <p>{bedrooms}</p>
      <p>{price}</p>
      <p>{city}</p>
      <p>{email}</p>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
