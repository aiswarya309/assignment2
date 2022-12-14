import React from "react";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer'
import { rootState } from "../Redux/Reducer";
import AppReducer from '../Redux/App/reducerApp'
type privateRoute={
    component:React.ElementType,
    path?:string,
    exact?:boolean
}

const PrivateRoute =({component: Component,...rest }:privateRoute) =>{
    // const Authenticate = useSelector((State:rootState)=>{
    //     return State.AppReducer.Authenticate
    //   })
    const token = useSelector((State:rootState)=>{
        return State.AppReducer.token
      })
      console.log("token in prvtrt:-",token);
      if(token == null){
        <Redirect to="/login" />
        console.log("NO TKN")
    }else{
        console.log("TKN")

    }
      
    return(
        <div>
            <Header/>
            <Route {...rest} render ={(props:any) =>{
                console.log("jjjjjjj",localStorage.getItem("AuthValue"));
                
                if(localStorage.getItem("AuthValue")) return < Component {...props} />
                if(!localStorage.getItem("AuthValue")) return <Redirect to="/login" />
                }}/>
            <Footer/>
        </div>
    )
}
export default PrivateRoute  