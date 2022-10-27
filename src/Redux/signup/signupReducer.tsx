import {actionHeader} from '../../type'
import { stateHeader} from '../../type'
import {signupAction} from './signupAction'
import { SIGNUP } from './signupType'
const initialState ={
    signup:[]
}

function signup(State:any = initialState ,action:any):any {
    switch(action.type){
        case SIGNUP :
            return{
                ...State,
                data_api : action.payload
            }
        default:
            return State
    }
}
export default signup