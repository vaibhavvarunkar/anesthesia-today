import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Settings=(props)=>{
    const goBack = () => {}

    return(
        <div>
                   {/* <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
           */}

                     <div className="col-md-12 pl-0 pr-2">

<div className="conArea d-block">
    <div className="LHeadings text-center">
        <a href="#" onClick={goBack}><i className="fii icon-down-arrow"></i></a> Settings
    </div>

    <div className="row justify-content-center ">
        <div className="col-md-9 savedCases">
            <div className="whtbxs">
                <ul>
                    <li>
                        <div className="float-left">
                            <h6>Notifications </h6>
                        </div>
                        <div className="float-right">
                            <div className="material-switch pull-right">
                                <input id="someSwitchOptionPrimary" name="someSwitchOption001" type="checkbox" />
                                <label for="someSwitchOptionPrimary" className="label-primary"></label>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </li>

                    <li>
                        <div className="float-left">
                            <h6><Link to="/changepassword" >Change Password </Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>


                    <li>
                        <div className="float-left">
                            <h6><Link to="/termsandconditions" >Terms  Conditions</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>


                    <li  onclick="location.href = 'Dark/Settings.html';">
                        <div className="float-left">
                            <h6>Colour Theme </h6>
                        </div>
                        <div className="float-right">
                            <p>White</p>
                        </div>
                        <div className="clearfix"></div>
                    </li>


                    <li>
                        <div className="float-left">
                          <h6>  <Link to="/privacypolicy" >Privacy Policy</Link></h6>
                        </div>

                        <div className="clearfix"></div>
                    </li>


                    <li>
                        <div className="float-left">
                           <h6> <Link to="/about" >About us </Link></h6>
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

export default Settings