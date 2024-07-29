import React, { useEffect, useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [question, setQuestion] = useState(data);
  return (
    <div>
      <Questions questions={question} />
    </div>
  );
};
export default App;
