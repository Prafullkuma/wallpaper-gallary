import React, { useEffect,  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getGallaryDetails} from '../Actions/gallaryActions'
import GallaryList from './GallaryList'


const GallaryContainer=()=>{
    const [data,setData]=useState([])
   
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getGallaryDetails()) 
    },[dispatch])

    const { gallary }=useSelector((state)=>{
        return state
    })

    useEffect(()=>{
        const result=gallary.map((ele)=>{
            return { id : ele.id, raw :ele.urls.raw, regular:ele.urls.regular }
        })
        setData(result)
    },[gallary])

    return(
        <div>
            <div className="gallery">
            {data.length===0 && "...loading"}
                {data.map((ele)=>{
                    return <GallaryList  key={ele.id} {...ele}/> 
                })}   
            </div>
        </div>
    )
}
export default GallaryContainer