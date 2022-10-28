import axios from 'axios'
// import { signupAction } from './signupAction'
import {authData} from './descriptionAction'
import {tokenNull} from '../App/actionApp'
import {authDataFalse} from '../App/actionApp'
function descriptionMiddle(){
    console.log("des in")
    return function(dispatch:any){
        const token= localStorage.getItem("token")
        console.log("TOKEN DESCRIPTION MIDDLE local:-",token)
        console.log("des ")
        axios.get(`http://localhost:5000/auth/about`,{headers:{'authorization':"Bearer " + token}})
        .then(response=>{
        dispatch(authData(response.data))
        console.log("RESPONSE",response.data)
        const status =response.data.success
        if(status == false){
            localStorage.setItem("AuthValue","false")
            localStorage.clear()
            dispatch(tokenNull())
            dispatch(authDataFalse())

        }
        
        })
        .catch(error => {
            return error;
          });
    }
}
export default descriptionMiddle