import './confirmModal.css'

export default function ConfirmModal({setConfirmModalIndex, removeRecipe}) {
    return (
        <div className='modal-background'>
            <div className="confirm-modal">
                <h3 className='confirm-title'>Warning</h3>
                <h5 className='confirm-text'>Are you sure you want to delete this recipe from the list?</h5>
                <div className='btn-container'>
                    <button className='btn' onClick={removeRecipe}>Delete</button>
                    <button className='btn' onClick={() => setConfirmModalIndex(-1)}>Go back</button>
                </div>
            </div>
        </div>
        )
}