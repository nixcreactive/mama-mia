import React from 'react';

const CardSuccess = ({ icon, title, desc, tag }) => {
  return (
    <article className="Card--Success">
      {icon}
      <div className="Card__text-wrapper">
        <p><strong>{title}</strong></p>
        <p>{desc}</p>
        <sub>{tag}</sub>
      </div>
    </article>
  );
};

export default CardSuccess;