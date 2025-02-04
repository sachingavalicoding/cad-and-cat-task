
import PropTypes from "prop-types";
const Container = ({children , classname}) => {
  return (
    <div className={`w-full md:w-[95%] lg:w-[90%] 2xl:w-[80%] mx-auto ${classname}`}>
        {children}
    </div>
  )
}

export default Container

Container.propTypes = {
    children:PropTypes.node.isRequired,
    classname:PropTypes.string,
}