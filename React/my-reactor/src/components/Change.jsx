import React, { useState } from "react";

function Change() {
  const [count, setCount] = useState(0);

  function change() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={change}>Click</button>
      <p>Hello clicked {count} times</p>
    </div>
  );
}

export default Change;