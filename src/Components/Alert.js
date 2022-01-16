// import React from "react";

// function alert(props) {

// }
// export default alert;
import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    console.log(word);
    // const lower = word.toLowerCase();
    // return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> dsad: {props.alert.msg}dad
        </div>
      )}
    </div>
  );
}

export default Alert
