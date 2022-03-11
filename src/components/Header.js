import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  // const onClick = () => {
  //   console.log("you clicked");
  // };
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Hello React",
};
Header.propType = {
  title: PropTypes.string.isRequired,
};
// css style in header

// Header.headingStyle ={
//      color :"blue",
//      backgroundColor:"yellow",
// }
export default Header;
