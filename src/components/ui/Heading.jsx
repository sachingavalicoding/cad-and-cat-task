import Proptypes from "prop-types";
const Heading = ({ children , classes }) => {
  return <h2 className={`text-3xl font-medium text-center text-gray-800 dark:text-gray-900   ${classes}`}>{children}</h2>;
};

export default Heading;

Heading.propTypes = {
  children: Proptypes.node.isRequired,
  classes: Proptypes.string,
};
