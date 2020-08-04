import React from 'react';
import PropTypes from 'prop-types';

const ProductsToolbar = props => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=ihaseeb1995%40gmail.com&ctz=Asia%2FKarachi"
      title="calendar"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    />
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
