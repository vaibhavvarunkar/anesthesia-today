import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import {API_ROOT} from '../constants'

const BurgerMenuScreen=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    const logout=()=>{
        var token= localStorage.getItem("token")
   
        fetch(API_ROOT+`user-logout?device_type=Android&device_token=123` ,{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Authorization': 'Bearer ' + token
        }
     
    })
        .then(response => response.json())
        .then(res =>{
            if(res.status==="true"&&res.message==="Logout successfully"){
             props.history.push('/login')
                localStorage.removeItem('token')
                  
            }

        })
    }

    

    return(
        <div>
                   {/* <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
           */}

                     <div className="col-md-12 pl-0 pr-2">

<div className="conArea d-block">
    <div className="LHeadings text-center mb-3">
        <a href="#" onClick="goBack()"><i className="fa fa-chevron-left"></i></a>
    </div>

    

    <div className="row justify-content-center ">
        <div className="col-md-9 savedCases">
            <div className="whtbxs">
                <ul>
                  
                    <li>
                        <div className="float-left">
                            <h6><Link to="/favourite" >HOME</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>


                    <li>
                        <div className="float-left">
                            <h6><Link to="/myprofile" >MY PROFILE</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>

                    


                   {/* <li  >
                        <div className="float-left">
                            <h6><Link to="/savecases"> OPEN A CASE </Link></h6>
                            <div style={{marginLeft:20}} >The User's Cases</div>
            <div style={{marginLeft:20}} >Shared Cases</div>
            <div style={{marginLeft:20}} >Case Templates</div>
          
                        </div>
                        <div className="clearfix"></div>
                    </li>


                    <li>
                        <div className="float-left">
                          <h6>  <Link  >OPEN CASE SUMMARY</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                   */}
                    <li>
                        <div className="float-left">
                          <h6>  <Link to="/settings" >SETTINGS</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                   

                    <li>
                        <div className="float-left">
                            <h6><Link to="/mysubcription" >MY SUBSCRIPTION</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                    <li>
                        <div className="float-left">
                           <h6> <Link to="/notification" >NOTIFICATION</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                    <li>
                        <div className="float-left">
                           <h6> <Link to="/feedback" >FEEDBACK</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                    <li>
                        <div className="float-left">
                          <h6 onClick={()=>logout()} >  LOGOUT</h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>
</div>

        </div>
    )
}

export default BurgerMenuScreen