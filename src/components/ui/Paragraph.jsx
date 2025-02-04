import Proptypes from "prop-types";
const Paragraph = ({ children, classes }) => {
  return <p className={` text-gray-900 dark:text-gray-900 ${classes}`}> {children} </p>;
};

export default Paragraph;

Paragraph.propTypes = {
  children: Proptypes.node.isRequired,
  classes: Proptypes.string,
};
