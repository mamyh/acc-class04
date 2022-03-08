import React, { useState } from "react";
import TheLayout from "./views/pages/TheLayout";

function App() {
  const [first, setfirst] = useState({});
  return (
    <div>
      <TheLayout />
    </div>
  );
}

export default App;
