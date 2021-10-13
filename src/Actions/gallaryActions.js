import axios from "axios"
export const GET_GALLARY_DETAILS="GET_GALLARY_DETAILS"

const URL="http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"

export const getGallaryDetails=()=>{
    return(dispatch)=>{
        axios.get(URL)
        .then((res)=>{
           const result=res.data
            dispatch({ type: GET_GALLARY_DETAILS , payload:result})
        })
        .catch((Err)=>{
            alert(Err)
        })
    }
}