import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import "../css/newLamaxHeader.css"

const LamaxSubHeader = (props) => {
    // console.log(props.name);
    return (
        <div>
            {
                props.name === "Return To Favourite" ?
                   <div  className="backNavigation  text-center"><Link className="arrow" to="/favourite"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">{props.name}</span></span></Link><span>{props.text}</span></div>
                    :
                    props.name === "Return To Action Library" ?
                        <div  className="backNavigation  text-center"><Link className="arrow" to="/allaction"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">{props.name}</span></span></Link><span>{props.text}</span></div>
                        :
                       <div  className="backNavigation  text-center"><Link className="arrow" to="/anesthesiatype"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to start a case/Intraop</span></span></Link><span>LOCAL ANESTHETIC MAX</span></div>

            }
            {/* <nav className="newLamaxHeader"><Link className="arrow" to="/anesthesiatype"><h3><i className="fas fa-arrow-left"></i></h3></Link><span>Return to start a case/Intraop</span></nav> */}
        </div>
    )
}

export default LamaxSubHeader
