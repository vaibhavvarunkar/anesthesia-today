import React from 'react';
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import '../App.css'
const Footer = () => {
    return (
        <div>
            <div className="container-fluid-footer container-fluid pb-0 mb-0 justify-content-center text-light">
                <footer>
                    <div className="row my-3 justify-content-center py-3">
                        <div className="col-11">
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <h3 className="row text-muted mb-md-0 mb-5 bold-text">AnaesthesiaOne</h3>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                    <ul className=" list-unstyled">
                                        <li><NavLink className="footer-link"  exact to="/">Home</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/about">About</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/contact">Contact</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/login">Login</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/signup">Signup</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/termsandconditions">Terms & Conditions</NavLink></li>
                                        <li><NavLink className="footer-link"  exact to="/privacypolicy">Privacy Policy</NavLink></li>
                                    
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                    <p className="mb-1">664, HEIDEN DRIVE, HUMMELSTOWN, PA, 17036</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-md-6 col-sm-6 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p className="row social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fab fa-facebook-f fa-2x"></i></span> <span className="mx-2"><i className="fab fa-linkedin fa-2x"></i></span> <span className="mx-2"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></span> <span className="mx-2"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></span> </p><small className="row rights"><span>&#174;</span> AnaesthesiaOne All Rights Reserved.</small>
                                </div>
                                
                                
                                
                                
                                
                                <div className="col-xl-4 col-md-6 col-sm-6 col-auto order-1 align-self-end ">
                                    <h6 className="mt-55 mt-2 text-muted bold-text"><b>AnaesthesiaOne</b></h6><small > <span  ><i className="fa fa-envelope" aria-hidden="true"></i></span> anaesthesiaoneplus@gmail.com</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
