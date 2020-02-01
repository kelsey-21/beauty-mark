import PropTypes from 'prop-types';

const categoryShape = PropTypes.shape({
  id: PropTypes.string.required,
  category: PropTypes.string.isRequired,
});

const productShape = PropTypes.shape({
  id: PropTypes.string,
  category: PropTypes.string.required,
  brand: PropTypes.string.required,
  description: PropTypes.string.required,
  ingredients: PropTypes.string.required,
  name: PropTypes.string.required,
});

const userProductShape = PropTypes.shape({
  id: PropTypes.string,
  category: PropTypes.string.required,
  brand: PropTypes.string.required,
  description: PropTypes.string.required,
  ingredients: PropTypes.string.required,
  name: PropTypes.string.required,
});

const learnShape = PropTypes.shape({
  id: PropTypes.string,
  reasoning: PropTypes.string.required,
  imageUrl: PropTypes.string.required,
  description: PropTypes.string.required,
  url: PropTypes.string.required,
  name: PropTypes.string.required,
});

export default {
  categoryShape,
  productShape,
  userProductShape,
  learnShape,
};
