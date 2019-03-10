import React    from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="Error">
      <p className="Error__message">Ooops! Something went wrong!</p>
      <Link className="Error__link" to="/">Back to safety</Link>
    </div>
  );
};

export default Error;