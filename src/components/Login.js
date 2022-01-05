/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux"; // this is used to modify or change values of a state. When calling the dispatch function you need to pass in as a parameter what action you want to take.
import { login, logout } from '../features/user'


const Login = () => {
    const dispatch = useDispatch()
    return <div>
        <button onClick={()=> {
            dispatch(login({name: "pedro", age: 20, email: "egualecharles@gmail.com"}))
        }}>Login</button>
        <button onClick={() => {
          dispatch(logout())
        }}>Logout</button>
    </div>
}

export default Login;