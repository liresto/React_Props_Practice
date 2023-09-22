import React from "react";
import contacts from "../contacts.js";

function App(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.src} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{props.num} </p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
