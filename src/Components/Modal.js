import React from "react";
import "./Modal.css";

function Modal({ closeModal, book }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{ book.title }</h1>
        </div>
        <div className="body" id="myBody">
          <p>Author: { book.author }</p>
          <p>Description: <br />{ book.description }</p>
          <p>Discuss:</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
