// import { AUTHDATA,TOKEN ,TOKEN_NULL} from "./typeApp";
import {ABOUT} from './descriptionType'
export const authData = (about:any)=>{
    return {
        type : ABOUT,
        payload:about
    }
}