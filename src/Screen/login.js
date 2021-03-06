import React,{useState,useEffect,useContext} from 'react'
import google from '../images/gplus.png'
import { GoogleLogin } from 'react-google-login';
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import facebook from '../images/facebook.png'
import {API_ROOT} from '../constants'
import '../css/login.css'

function Login(props) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
     
     localStorage.removeItem('token');
    
    const responseGoogle = (response) => {
        console.log(response.profileObj.googleId);

       fetch(API_ROOT+`login-with-social?social_id=${response.profileObj.googleId}&social_type=Google&device_token=123456789&device_type=Android` ,{
            method: 'POST',
            
            headers: { 
               'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
         
        })
            .then(response => response.json())
            .then(res =>{
                console.log(res)
                if(res.status==="true"&&res.message==="Login successfully."){
                    localStorage.setItem('token', res.token);
                    props.history.push('/favourite')
                   
                      }else if(res.status==="false"&&res.message==="User not found."){
                         alert("User not found.")
                     }else if(res.status==="false"&&res.message==="Password Incorrect."){
                         alert("User not found.")
                     }
            
            })
            

      }

      const loginUser=()=>{
        
          console.log(email,password)
        if(email===""){
            alert("please enter email id")
        }else if(password===""){
            alert("please enter password")
        }else{
            fetch(API_ROOT+`login?email=${email}&password=${password}&device_token=123&device_type=Android` ,{
        method: 'POST',
        
        headers: { 
           'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="Login Successfully"){
                localStorage.setItem('token', res.token);
                props.history.push('/favourite')
                   
            
                 
                   
                 }else if(res.status==="false"&&res.message==="User not found."){
                     alert("User not found.")
                 }else if(res.status==="false"&&res.message==="Password Incorrect."){
                     alert("User not found.")
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
                <div className="col-md-5 whtbx login">
                    <h3>Welcome Back!</h3>

                    <div className="form-group">
                        {/* <label for="exampleInputEmail1">Email</label> */}
                        <i className="fa fa-envelope login-icon"></i>
                        <input onChange={(e)=>setEmail(e.target.value)}   id="email" type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Email Id"/>
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <i className="fa fa-lock login-icon"></i>
                        <input onChange={(e)=>setPassword(e.target.value)} id="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"/>
                    </div>
            <div>  <Link to="/forgotPassword" className="forgot">Forgot Password?</Link></div>
                    <button onClick={()=>loginUser()} className="btn " >Login</button>
                    <p className="ORs">OR</p>
                    <div className="socials text-center">
                                <a href="#" className="fb">
                                    <i className="fab fa-facebook-square" ></i>
                                </a>

                                <a onclick="onSignIn()" >
                                    <GoogleLogin
                                        clientId="488862924565-av28ojkuhskvf7gt8p174gmerllpbvns.apps.googleusercontent.com"
                                        buttonText=""
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                   
                                </a>
                            </div>

                    {/* <div className="socials text-center">
                        <a href="#">
                            <img src={facebook} />
                        </a>

                        <a onclick="onSignIn()" >
                        <GoogleLogin
    clientId="488862924565-av28ojkuhskvf7gt8p174gmerllpbvns.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={ responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
                        </a>
                    </div> */}

                </div>

            </div>
            
            <p className="stexts text-center">Don't have an account? <Link to="/signup" >Sign up here</Link></p>
        </div>

    </div>
    <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One ?? 2021 ?? All Rights Reserved ?? <Link to="/termsandconditions">Terms of Use </Link>?? <Link to="/privacypolicy">Privacy Policy</Link></span>
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
                        <div className="col-4"><span>MALL INTESTINE ??? HERNIA REPAIR</span></div>
                        <div className="col-4"><span>SMALL INTESTINE ??? NON OBSTRUCTED	</span></div>

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

export default Login
