import React, { useState } from "react";

function CreateArea(props) {
  const [cardData, setCardData] = useState({
    title: "",
    content: "",
  });
  const { title, content } = cardData;
  const setTitle = (event) => {};
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={(event) => {
            const titleValue = event.target.value;
            setCardData((prevValue) => {
              return {
                title: titleValue,
                content: prevValue.content,
              };
            });
          }}
          placeholder="Title"
          value={title}
        />
        <textarea
          name="content"
          onChange={(event) => {
            const textValue = event.target.value;
            setCardData((prevValue) => {
              return {
                title: prevValue.title,
                content: textValue,
              };
            });
          }}
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          onClick={() => {
            props.func(cardData);
            setCardData({
              title: "",
              content: "",
            });
          }}
          type="button"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
