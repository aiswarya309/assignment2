import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { authData } from "../../Redux/App/actionApp";
import { useDispatch} from 'react-redux';
import tokenMiddle from '../../Redux/App/tokenMiddle'

function Login(){
    const [loginData, setLoginData] = useState({
        txtName:'',
        password:''
    })
    const {txtName,password}= loginData
    let history = useHistory()
    const dispatch =useDispatch()
    const btnClick =(e:any) =>{
        dispatch<any>(tokenMiddle({email:txtName,password:password,nav:history}))
        // if((txtName === 'admin') && (password === 'admin')){
        //     sessionStorage.setItem("AuthValue","true")
        //     dispatch(authData())
        //     history.push('/')
        // }else{
        //     history.push('/login')
        // }
    }
    const btnSignup=()=>{
        history.push('/signup')

    }
    useEffect(()=>{
        localStorage.removeItem("token")
    })
        return(
            <div>
                <form>
                    Name: <input type="text"  onChange={(val)=>setLoginData({...loginData,txtName:val.target.value})} value={txtName}/><br/><br/>
                    Password: <input type="text" onChange={(val)=>setLoginData({...loginData,password:val.target.value})} value={password}/><br/><br/>
                    <button type="button" onClick={btnClick}>Login</button>
                    <button type="button" onClick={btnSignup}>Signup</button>

                </form>
            </div>
            )
}
export default Login
