import React from "react";

function Card({ title, date }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{date}</p>
      <div className="actions">
        <button>Download</button>
        <button>View</button>
      </div>
    </div>
  );
}

export default Card;
