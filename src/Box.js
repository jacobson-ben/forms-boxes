import React from "react";

function Box({id, height, width, backgroundColor, removeBox}) {
  return (
  <div>
    <div style={{height, width, backgroundColor}}></div>
    <button onClick={() => removeBox(id)}>Remove box</button>
  </div>
  )
}

export default Box;