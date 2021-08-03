import React,{useState} from 'react'
import logo from '../images/logo.png'
import smalllogo from '../images/logo-small.png'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
const Notification=(props)=>{
    
const goBack = () => {

}

    return(
        <div  >
                 {/* <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
           */}

      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}} className="container ">
        <div className="row ">
            
            <div className="col-md-12 pl-0 pr-2">
                <div className="conArea d-block">
                    <div className="LHeadings text-center mb-3">
                        <a href="#" onClick={goBack}><i className="fa fa-chevron-left"></i></a> Terms &amp; Condition
                    </div>
                    <div className="row justify-content-center ">
                        <div className="col-md-12 savedCases">
                            <ul className="notify">
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                                <li>
                                    <img src={smalllogo} />
                                    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using .</h4>
                                    <p>10 min ago</p>
                                </li>
                            </ul>
                        </div>
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

export default Notification