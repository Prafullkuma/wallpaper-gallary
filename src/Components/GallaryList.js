import React, { useEffect, useState } from 'react'
import Modal from './Modal'

const GallaryList=({raw,regular})=>{
    const [show,setShow]=useState(false)
   
    useEffect(()=>{
        if(show===true){
          document.body.style.overflow="hidden"
        }
        else{
            document.body.style.overflow="auto"
        }
    },[show])

    const handleOpen=()=>{
        setShow(true)
    }

    const handleClose=()=>{
      setShow(false)  
    }

    return(
        <div>
            <div onClick={handleOpen} className="gallery-img"> 
                <img src={raw} alt="flex-Images"/>
            </div>  
            <Modal regular={regular} show={show} handleClose={handleClose}/>
        </div>
    )
}
export default GallaryList