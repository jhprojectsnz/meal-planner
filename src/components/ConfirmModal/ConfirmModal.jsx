import React from "react";
import "./ConfirmModal.css";

export default function ConfirmModal({ setRecipeToDeleteId, removeRecipe }) {
  return (
    <div className="modal-background">
      <div className="confirm-modal">
        <h3 className="confirm-title">Warning</h3>
        <h5 className="confirm-text">
          Are you sure you want to delete this recipe from the list?
        </h5>
        <div className="confirm-btn-container">
          <button className="btn" onClick={() => setRecipeToDeleteId(0)}>
            Go back
          </button>
          <button className="bold-btn btn" onClick={removeRecipe}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
