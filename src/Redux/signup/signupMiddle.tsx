import axios from 'axios'
import { signupAction } from './signupAction'

function signupMiddle(data:any){
    // console.log("signup in")
    return function(dispatch:any){
        // console.log("signup ")
        axios.post(`http://localhost:5000/auth/signup`,{email:data.email,password:data.password,name:data.name})
        .then(response=>{
        dispatch(signupAction(response.data))
        // console.log("RESPONSE",response)
        const status =response.data.success
        const history=data.nav
        if(status === false){
          history.push('/signup')
        }
        else{
          history.push('/login')
        }
        })
        .catch(error => {
            return error;
          });
    }
}
export default signupMiddle