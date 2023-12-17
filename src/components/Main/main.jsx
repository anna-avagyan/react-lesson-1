import React from "react";
import "./stayle.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className={"main-box"}>
          <div className={"Secondary-Column"}>Secondary Column</div>
          <div className={"flex-items"} >Content Here</div>
          <div className={"flex-items"} >Content Here</div>
          
        </div>
      </main>
    );
  }
}
export default Main;