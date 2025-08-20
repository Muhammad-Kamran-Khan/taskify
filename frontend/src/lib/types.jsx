import PropTypes from "prop-types";

const taskPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.string,
  completed: PropTypes.bool,
  dueDate: PropTypes.string,
  priority: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

export default taskPropTypes;
