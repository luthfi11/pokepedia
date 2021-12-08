import React from 'react'
import '../../styles/modal.css'

const SuccessModal = ({ textValue, onTextChange, onSave, onDismiss }) => (
  <div className="modal">
    <div className="modal-card">
      <b className="modal-title">{'Success!'}</b>
      <div className="modal-form">
        <label>{'Enter Pokemon Nickname'}</label>
        <input name="nickname" type="text" placeholder="Nickname" value={textValue} onChange={onTextChange} />
      </div>
      <button onClick={onSave} className="save-button" disabled={!textValue}>{'Save To Collection'}</button>
      <button onClick={onDismiss} className="dismiss-button">{'Dismiss'}</button>
    </div>
  </div>
)

export default SuccessModal
