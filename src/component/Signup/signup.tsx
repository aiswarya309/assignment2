import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authData } from "../../Redux/App/actionApp";
import { useDispatch} from 'react-redux';
import signupMiddle from '../../Redux/signup/signupMiddle'

function Signup(){
    const [signupData, setsignupData] = useState({
        email:'',
        username:'',
        password:''
    })
    const {email,username,password}= signupData
    let history = useHistory()
    const dispatch =useDispatch()
    const btnSignup =() =>{
        dispatch<any>(signupMiddle({email:email,name:username,password:password,nav:history}))
        console.log("Signup data:-",email,username,password);
        
        // if((txtName === 'admin') && (password === 'admin')){
        //     sessionStorage.setItem("AuthValue","true")
        //     dispatch(authData())
        //     history.push('/')
        // }else{
        //     history.push('/login')
        // }
    }
    const btnLogin=()=>{
                    history.push('/login')

    }
        return(
            <div>
                <form>
                    Name: <input type="text"  onChange={(val)=>setsignupData({...signupData,email:val.target.value})} value={email}/><br/><br/>
                    Username: <input type="text"  onChange={(val)=>setsignupData({...signupData,username:val.target.value})} value={username}/><br/><br/>
                    Password: <input type="text" onChange={(val)=>setsignupData({...signupData,password:val.target.value})} value={password}/><br/><br/>
                    <button type="button" onClick={btnSignup}>Signup</button>
                    <button type="button" onClick={btnLogin}>Login</button>

                </form>
            </div>
            )
}
export default Signup
