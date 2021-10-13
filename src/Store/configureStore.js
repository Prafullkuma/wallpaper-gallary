import {createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import gallaryReducer from '../Reducers/gallaryReducer'


const configureStore=()=>{ 

    const store=createStore(combineReducers({
         gallary:gallaryReducer

    }),applyMiddleware(thunk))
    
    return store
}
export default configureStore

