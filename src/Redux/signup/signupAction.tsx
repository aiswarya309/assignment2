// import { EMPLOYEE_FULL_DETAILS } from "./type";
import {SIGNUP} from './signupType'

export const signupAction=(details:any)=>{
   return{
    type:SIGNUP,
    payload : details
   }
}