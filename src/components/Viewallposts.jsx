import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Viewallposts = () => {
  const token=sessionStorage.getItem("token")

  const [output, setoutput] = useState([
   

  ]
  )

  const fetchdata=()=>{
    axios.post("http://localhost:4000/myposts",{},{headers:{"token":token,"Content-Type":"application/json"}}).then(

      (Response)=>{
        setoutput(Response.data)
      }
    ).catch(
      (error)=>{
        console.log(error)
      }
    )
  }

  useEffect(()=>{fetchdata()},[])

  return (
    <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <div className="row g-3">


              {output.map(
                (item,index)=>{
                  return(



              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">{item.Userid}</h5>
                        <p class="card-text">{item.Message}</p>
                        <p class="card-text"><small class="text-body-secondary">{item.Postdate}</small></p>
                      </div>
                    </div>
                  </div>
                </div>




              </div>

                  )

              })}



            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewallposts
