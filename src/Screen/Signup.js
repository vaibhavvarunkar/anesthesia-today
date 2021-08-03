import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import {API_ROOT} from '../constants'

const Signup = () => {
    const [firstName,setfirstName]=useState(null)
    const [lastName,setlastName]=useState(null)
    const [email,setEmail]=useState(null)
    const [phoneNumber,setphoneNumber]=useState(null)
    const [password,setPassword]=useState(null)
    const [confirmPassword,setconfirmPassword]=useState(null)

    const signUp=()=>{
        if(firstName===""){
            alert("please enter first name")
            document.getElementById('firstname').focus()
        } if(lastName===""){
            alert("please enter last name")
            document.getElementById('lastname').focus()
        
        }
        else if(email===""){
            alert("please enter email")
            document.getElementById('email').focus()
        }else if(phoneNumber===""){
            alert("please enter phoneNumber")
            document.getElementById('phoneNumber').focus()
        }else if(password===""){
            alert("please enter password")
            document.getElementById('password').focus()
        }else if(confirmPassword===""){
            alert("please enter confirm password")
            document.getElementById('password').focus()
        }else if(password===confirmPassword){

     
        fetch(API_ROOT+`signup?email=${email}&first_name=${firstName}l&last_name=${lastName}&mobile_number=${phoneNumber}&password=${password}&confirm_password=${confirmPassword}&device_type=Android&device_token=123` ,{
            method: 'POST',
            headers: { 
               'Accept': 'application/json',
    'Content-Type': 'application/json'
             },
           
           
        })
            .then(response => response.json())
            .then(res =>{
              if(res.status==="true"&&res.message==="User Registered Successfully"){
                localStorage.setItem("token",res.token)
                window.location="/afterLogin"   
                
              }else if(res.status==="false"&&res.message==="User already exists"){
                  alert("User already exists")
              }
            })
        }
      
    }
    return (
        <div><style>{"\.header {\ display:none; \ } \ "}</style>
        <header>
        <div className="container">
            <div className="row">

                <div className="col-md-12 header-right">
                    <h1 className="logo">
                        <a ><img src={logo} /></a>
                    </h1>
                    <div className="usersDetail"><i className="fii icon-user" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div className="subsBG">
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-5 whtbx sign-up-page">
                    <h3>Sign up</h3>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={(e)=>setfirstName(e.target.value)} id="firstname" className="form-control" placeholder="Enter First Name"/>
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input onChange={(e)=>setlastName(e.target.value)} id="lastname" className="form-control" placeholder="Enter Last Name"/>
                    </div>
                    
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input onChange={(e)=>setEmail(e.target.value)} onchange="validatationOfEmailID()"  id="email" className="form-control" placeholder="Enter E-mail Address"/>
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input onChange={(e)=>setphoneNumber(e.target.value)} maxlength="10" onchange="validationForPhoneNumber()" id="phoneNumber" className="form-control" placeholder="Enter Phone Number"/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} onchange="validationForPassword()" id="password" type="password" className="form-control" placeholder="Enter Password"/>
                    </div>


                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input onChange={(e)=>setconfirmPassword(e.target.value)} onchange="validationForConfirmPassword()" id="confirmPassword" type="password" className="form-control" placeholder="Enter Confirm Password"/>
                    </div>



                    <button onClick={()=>signUp()}  className="btn " >submit</button>

                </div>

            </div>
            <p className="stexts text-center">Already have an account? <Link to="/">Sign in here</Link></p>
        </div>
    </div>
    <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One © 2021 · All Rights Reserved · <Link to="/termsandconditions" >Terms of Use </Link>· <Link to="/privacypolicy">Privacy Policy</Link></span>
    </footer>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div className="btnBox">
                        <button className="savebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span className="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>


    <div className="modal fade" id="genderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div className="btnBox">
                        <button className="gsavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span className="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>

    <div className="modal fade" id="WeightModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div className="btnBox">
                        <button className="wsavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span className="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>

    <div className="modal fade" id="surgeryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>are you sure you want to clear data for this field. </h6>
                    <div className="btnBox">
                        <button className="sursavebtns" data-dismiss="modal">yes</button>
                        <button data-dismiss="modal">NO</button>
                    </div>
                    <span className="infos">click here to prevent this
                        notification from appearing again</span>
                </div>

            </div>
        </div>
    </div>


    <div className="modal fade" id="generalModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">general/sURGERY TYPE</h5>
                    <div className="actnss">
                        <i className="fii icon-floppy-disk sursavebtns" data-dismiss="modal"></i>
                        <i data-dismiss="modal" className="fii icon-close"></i>

                    </div>
                </div>
                <div className="modal-body">
                    <div className="row mb-2  ml-0 mr-0">
                        <div className="col-4"><span>APPENDECTOMY - UNCOMPLICATED</span></div>
                        <div className="col-4"><span>MALL INTESTINE – HERNIA REPAIR</span></div>
                        <div className="col-4"><span>SMALL INTESTINE – NON OBSTRUCTED	</span></div>

                    </div>

                    <div className="row mb-2 ml-0 mr-0">
                        <div className="col-4"><span>SMALL INTESTINE - OBSTRUCTED </span></div>
                        <div className="col-4"><span>COLORECTAL</span></div>
                        <div className="col-4"><span>GASTRODUO
                            DENAL</span></div>

                    </div>

                    <div className="row mb-2 ml-0 mr-0">
                        <div className="col-4"><span>W/IMPLANTED
                            FOREIGN
                            MATERIAL </span></div>
                        <div className="col-4"><span>NOT LISTED</span></div>


                    </div>
                </div>

            </div>
        </div>
    </div>





    <div className="modal fade" id="AllModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 br-right">
                                <a href="#" data-dismiss="modal">SAVE W/O STARTING CASE</a>
                                <a href="#" data-dismiss="modal">SAVE TO YOUR PROFILE</a>
                            </div>
                            <div className="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 3</a>
                            </div>
                            <div className="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 2</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 4</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="modal fade" id="summaryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 br-right">
                                <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#summaryModal-2">SAVE W/O STARTING CASE</a>
                                <a href="#" data-dismiss="modal">SAVE TO YOUR PROFILE</a>
                            </div>
                            <div className="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 3</a>
                            </div>
                            <div className="col-4">
                                <a href="#" data-dismiss="modal">SAVE AS CASE 2</a>
                                <a href="#" data-dismiss="modal">SAVE AS CASE 4</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="modal fade" id="summaryModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">




                <div className="modal-body">
                    <h6>CASE 1</h6>
                    <span>SAVE AS:</span>
                    <span className="blocks">18YO_F_COLORECTAL_12-19-2020</span>
                </div>

            </div>
        </div>
    </div>

    <div className="modal fade" id="StartCaseModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">

                <div className="modal-body">
                    <h6>PLEASE SELECT HOW YOU WOULD LIKE TO SAVE THIS CASE:</h6>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 br-right">
                                <a href="#" data-dismiss="modal" className="saveLater">Save all started cases</a>
                                <a href="#" data-dismiss="modal" className="saveLater">SAVE Later</a>
                                <a href="#" data-dismiss="modal" className="saveLater">SAVE No Cases</a>
                            </div>
                            <div className="col-4">
                                <span>&nbsp;</span>
                                <a href="#" data-dismiss="modal" className="saveLater">SAVE AS CASE 1</a>
                                <a href="#" data-dismiss="modal" className="saveLater">CASE 3 Not Started</a>
                            </div>
                            <div className="col-4">
                                <span>&nbsp;</span>
                                <a href="#" data-dismiss="modal" className="saveLater">CASE 2 Not Started</a>
                                <a href="#" data-dismiss="modal" className="saveLater">CASE 4 Not Started</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

        </div>
    )
}

export default Signup
