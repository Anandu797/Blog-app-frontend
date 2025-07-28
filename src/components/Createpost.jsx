import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Createpost = () => {

const token=sessionStorage.getItem("token")

    const[input,changeinput]=useState({
        "Message":"",
        "Userid":sessionStorage.getItem("userid")
    })


    const inputHandler=(event)=>{
        changeinput({...input,[event.target.name]:event.target.value})
    }


    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:4000/addpost",input,{headers:{"token":token,"Content-Type":"application/json"}},).then(

            (Response)=>{
                if (Response.data.status=="succesfull") {
                    alert("post added succesfully")
                    changeinput({"Message":"","Userid":""})
                } else {
                    alert("something went wrong")
                     changeinput({"Message":"","Userid":""})
                }
            }

        ).catch()
    }

    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Content</label>
                                <textarea name='Message' value={input.Message} onChange={inputHandler} className="form-control">Write something...</textarea>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readvalues}>Add post</button>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Createpost
