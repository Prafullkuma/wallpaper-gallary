
export const getFilteredImage=(arr,id)=>{
    const result=arr.find((ele)=>{
        return ele.id===id
    }) 
    return result
}
