import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

const navigate=useNavigate()

const[input,changeinput]=useState({


"email":"",
"password":""


})

const inputHandler=(event)=>{
    changeinput({...input,[event.target.name]:event.target.value})
}



const readvalues=()=>{
    console.log(input)
    axios.post("http://localhost:4000/signin",input).then(
        (Response)=>{
            console.log(Response.data)
            if (Response.data.status=="invalid password") {
                alert("Incorrect password")
            } else if(Response.data.status=="invalid email"){
                alert("invalid email id")
            }
            else{
                let token=Response.data.token
                let userid=Response.data.userid

                console.log(token)
                console.log(userid)

                // session storing for  token using in all pages

                sessionStorage.setItem("userid",userid)
                sessionStorage.setItem("token",token)
                navigate("/createpost")
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }


    )
}



    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                                <button className="btn btn-primary" onClick={readvalues} >Log in</button>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <a href="/signup" className="btn btn-success">Register</a>


                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signin
