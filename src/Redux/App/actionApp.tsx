import { AUTHDATA,TOKEN ,TOKEN_NULL} from "./typeApp";
export const authData = ()=>{
    return {
        type : AUTHDATA
    }
}

export const token = (token:any)=>{
    return {
        type : TOKEN,
        payload:token
    }
}
export const tokenNull = ()=>{
    return {
        type : TOKEN_NULL
    }
}