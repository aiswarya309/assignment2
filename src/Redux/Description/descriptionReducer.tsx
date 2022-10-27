import {ABOUT} from './descriptionType'
const initialState ={
    about :[]
}
function descriptionResucer(State:any = initialState,action:any):any{
    switch(action.type){
        case ABOUT:
            return{
                ...State,
                about : action.payload,
            };
            default:
                return State
    }
}
export default descriptionResucer