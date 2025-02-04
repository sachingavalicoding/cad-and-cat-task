import PropTypes from "prop-types";

const PrimaryButton = ({ children, onClick,type , disabled, classes }) => {
  return (
    <button
    type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 dark:bg-black dark:border-white border-[1px] text-white rounded-md transition-all 
      hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed ${classes}`}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  type: PropTypes.string,
};

export default PrimaryButton;
