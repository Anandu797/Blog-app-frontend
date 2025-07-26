import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {


    const [input,changeInput]=useState({

        "name":"",
        "phone":"",
        "email":"",
        "password":""


    })


    const inputHandler=(event)=>{

changeInput({...input,[event.target.name]:event.target.value})


    }


    const readvalues=()=>{
        console.log(input)

        axios.post("http://localhost:4000/signup",input).then(
            (res)=>{

                console.log(res.data)

                if (res.data.status=="success") {
                    
                    alert("Registered successfully")


                } else {


                    alert("email already exists")
                    
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


                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Email id</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>




                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control"name='password' value={input.password} onChange={inputHandler} />



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success" onClick={readvalues}>Sign up</button>


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <a href="/" className="btn btn-primary">Back to login page</a>


                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Signup
