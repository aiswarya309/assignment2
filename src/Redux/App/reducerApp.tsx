import {actionApp} from '../../type'
import { TOKEN ,TOKEN_NULL,AUTHDATA_FALSE} from './typeApp';
const initialState={
    Authenticate:false,
    token:''
}

function AppReducer(State = initialState , action:any):any{
    switch (action.type){
        case 'AUTHDATA' :
            return {
                ...State,
                Authenticate : true
            };
            case AUTHDATA_FALSE :
                return {...State,Authenticate : false};   
        case TOKEN :
            return {...State,token : action.payload};    
        case TOKEN_NULL :
            return {...State,token : null};
        default:
            return State
    }
}
export default AppReducer