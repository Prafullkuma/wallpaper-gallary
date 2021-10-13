import React from 'react'
import './modal.css'

const Modal=({regular,show,handleClose})=>{
     if(!show){
        return null
     } 

    return(
        <div className="modal" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} >
                <div className="modal-close">  
                     <span onClick={handleClose}>&times;</span>
                </div>
                 <div className="modal-body">
                    <img src={regular} alt="fullView"/>
                 </div>
            </div>
        </div>
    )
}
export default Modal