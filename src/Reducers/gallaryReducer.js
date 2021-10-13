import { GET_GALLARY_DETAILS} from '../Actions/gallaryActions'

const initialState=[]

const gallaryReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case GET_GALLARY_DETAILS:{
           return actions.payload   
        }
        default:{
            return state
        }
    }
}
export default gallaryReducer