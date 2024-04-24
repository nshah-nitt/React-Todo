import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  const updateItems = (cardData) => {
    setItems((prevValue) => {
      return [...prevValue, cardData];
    });
  };
  const deleteItems = (id) => {
    setItems((prevValue) => {
      return prevValue.filter( (value, index) => id !== index )
    });
  };
  return (
    <div>
      <Header />
      <CreateArea func={updateItems} />
      {items.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            func={deleteItems}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
