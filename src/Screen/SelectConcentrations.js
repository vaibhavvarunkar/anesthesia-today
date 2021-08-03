import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/SelectConcentrations.css'
import { setConcentration } from "../redux/LamaxActions"
const SelectConcentrations = (props) => {
    const [concentrationData, setconcentrationData] = useState([])
    const dispatch = useDispatch()
    const dose = useSelector(state => state.lamax.dose)
    const conc = useSelector(state => state.lamax.conc)

    var obj = {
        name: "",
        value: ""
    }
    const saveConcentrations = (Conname, Convalue) => {
        console.log(Conname, Convalue)
        obj = {
            name: Conname,
            value: Convalue/100,
        }
        concentrationData.push(obj)
    }
    return (
        <div className="select-concentration-main-container" >
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/afterlamax"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Select Concentration</h3>
                </nav>
            </div>
            <div className="selected-concentrations-list-main-container" >
                {
                    dose.map((data) => {
                        console.log(data)
                        return (
                            <div className="selected-concentrations-list" >
                                <div>{data.name}-{data.type}</div>
                                <input type="number" onBlur={(e) => saveConcentrations(data.name, e.target.value)} className="input-for-concentration" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="next-button" onClick={() => {
                props.history.push({
                    pathname: '/patientProfile',
                    // state: { concentrationData: concentrationData }
                });
                dispatch(setConcentration(concentrationData));
                console.log(concentrationData)
            }
            } >NEXT</div>
        </div>
    )
}


export default SelectConcentrations