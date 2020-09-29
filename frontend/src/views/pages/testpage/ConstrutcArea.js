import React from "react";

export default function ConstrutcArea(props) {
  const drop = (e) => {
    e.preventDefault();
    // transfer id
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id)

    const card = document.getElementById(card_id);
    console.log(card);
    card.style.display = "block";

    // appending to board
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    console.log(e)
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className='second'
    >
    </div>
  );
}
