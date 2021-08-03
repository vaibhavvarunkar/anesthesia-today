import React, { useState } from 'react';
import "../css/CrisesSub.css";
import { Link } from 'react-router-dom';
import Header from '../CustomComponent/Header'

const CrisesSubtype = (props) => {
    const [display, setDisplay] = useState(false);
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/crises"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Crises</span></span></Link> {props.location.state.name}
                {
                    display ?
                        <span style={{ position: "absolute", right: "2%", display:"inlineBlock", top:"5px", width: "50%" }}><input placeholder="Enter Patient's Weight" className="ant-text-input" style={{height:"30px"}}></input></span>
                        : <span onClick={() => setDisplay(true)} style={{ cursor:"pointer", position: "absolute", right: "25%" }}>Patients Weight</span>
                }
            </div>
            {/* <header>
                <h2>{props.location.state.name}</h2>
                {
                    display ?
                        <input placeholder="Enter Patient's Weight"></input>
                        : <h2 onClick={() => setDisplay(true)}>Patients Weight</h2>
                }

            </header> */}
            <div className="main-container mt-3">
                <h5>May Have:</h5>
                <ul>
                    <li>Hypotension</li>
                    <li>Rash</li>
                    <li>Bronchospasm</li>
                </ul>
                <br></br>
                <br></br>
                <h5>Common Causative Agents:</h5>
                <ul>
                    <li>Hypotension</li>
                    <li>Rash</li>
                    <li>Bronchospasm</li>
                    <li>Antibodies</li>
                    <li>Latex</li>
                </ul>
            </div>
        </div>
    )

}

export default CrisesSubtype
