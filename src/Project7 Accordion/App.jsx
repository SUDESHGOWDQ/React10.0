import React, { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "First Item",
    description: "This is the first item",
  },
  {
    id: 2,
    title: "Second Item",
    description: "This is the second item",
  },
  {
    id: 3,
    title: "Third Item",
    description: "This is the third item",
  },
];

const App = () => {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="App">
      {data.map((item) => (
        <div key={item.id} className="item">
          <span>{item.title}</span>

          <button onClick={() => handleOpen(item.id)}>
            {openId === item.id ? "⬆️" : "⬇️"}
          </button>

          {openId === item.id && (
            <div className="description">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
