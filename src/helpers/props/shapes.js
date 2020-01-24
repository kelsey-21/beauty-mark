import PropTypes from 'prop-types';

const categoryShape = PropTypes.shape({
  id: PropTypes.string.required,
  category: PropTypes.string.isRequired,
});

export default { categoryShape };
