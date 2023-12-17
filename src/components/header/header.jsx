import React from "react";
import "./stayle.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={"header-box"}>
          <strong>
            <a href="https://www.free-css.com/free-css-layouts/page1">
              Free CSS Layouts
            </a>
          </strong>
        </div>
      </header>
    );
  }
}
export default Header;
