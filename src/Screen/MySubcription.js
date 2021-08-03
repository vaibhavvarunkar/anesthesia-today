import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { Link } from 'react-router-dom'

const MySubcription=(props)=>{
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        props.history.push('/drawer')
    
    }

    return(
        <div>
          
 <div className="container">
 <div className="col-md-12 pl-2 pr-2">
                <div className="conArea d-block">
                    <div className="LHeadings text-center">
                        <a href="#" onclick="goBack()"><i className="fii icon-down-arrow"></i></a> My Subscriptions
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-9 savedCases">
                            <div className="greyBlock">

                                <div className="row">
                                    <div className="col-md-9">
                                        <h5>Current Plan</h5>
                                        <h4>Monthly</h4>
                                        <p>Get access to hundreds of guided medical guidlines and scores.</p>
                                    </div>
                                    <div className="col-md-3 text-right align-self-center">$20/- Per Month</div>
                                </div>


                                <div className="row">
                                    <div className="col-md-12 mt-4 mb-3 text-center">
                                        <Link to="/subcription" > <button type="submit" className="btn font-weight-bold text-uppercase">update Plan</button>
                                       </Link>
                                        <button type="submit" className="btn font-weight-bold text-uppercase">Cancel Subscription</button>

                                    </div>
                                </div>
                            </div>
                            <p className="infs">Recurring Billing. Cancel anytime. Payment will be charged to your saved payment method. Your subscription automatically renews unless auto-renew is turned of at least 24 hours before the end of the current period. </p>
                        </div>
                    </div>

                </div>
            </div>
        
   </div>
   <footer>
        <p>Calculations must be re-checked and should not be used alone to guide patient care, nor should they substitute for clinical judgment. See our full disclaimer.</p>
        <span>Anesthesia One © 2021 · All Rights Reserved · <a href="#">Terms of Use </a>· <a href="#">Privacy Policy</a></span>
    </footer>
  
        </div>
    )
}

export default MySubcription