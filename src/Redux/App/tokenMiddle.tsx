import axios from 'axios'
import {authData} from './actionApp'
import {token} from './actionApp'
function tokenMiddle(data:any){
    // console.log("signup in")
    return function(dispatch:any){
        // console.log("signup ")
        axios.post(`http://localhost:5000/auth/login`,{email:data.email,password:data.password})
        .then(response=>{
        // dispatch(token(response.data))
        console.log("RESPONSE in login",response)
        const status =response.data.success
        const history=data.nav
        const token_login=response.data.token
        console.log("TOKEN in tknMiddle",token)
        if(status){
          //   localStorage.clear()
          history.push('/')
          localStorage.setItem("AuthValue","true")
          dispatch(token(token_login))
          localStorage.setItem("token",token_login)
          dispatch(authData())
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
export default tokenMiddle