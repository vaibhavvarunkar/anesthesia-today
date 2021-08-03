import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { defaultProps } from 'react-select/src/Select';
import '../css/PatientProfile.css'
import { setLamaxWeightType, setPatientWeight } from '../redux/LamaxActions';
const PatientProfile = (props) => {
    const weightType = [
        { label: 'KG', value: 'KG' },
        { label: 'LB', value: 'LB' },

    ]

    const patientWeightType = useSelector(state => state.lamax.weightType)
    const lamaxWeightType = useSelector(state => state.lamax.lamaxWeightType)
    const conc = useSelector(state => state.lamax.conc)

    const dispatch = useDispatch()

    return (
        <div className="patient-profile-main-container" >
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/selecconcentrations"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Patient Proile</h3>
                </nav>
            </div>
            <div className="patient-profile-input-container" >
                <div className="weight-container" >
                    <div>Weight</div>
                    <input className="weight-input" onChange={(e) => dispatch(setPatientWeight(e.target.value))} />
                </div>
                <div className="weight-parameter-container" >
                    {
                        weightType.map((data) => {
                            if (data.value === lamaxWeightType.value) {
                                return (
                                    <div className="weight-type-button-selected-of-patient-profile" onClick={() => dispatch((setLamaxWeightType(data)))} >{data.label}</div>
                                )
                            }
                            else {
                                return (
                                    <div className="weight-type-button-of-patient-profile" onClick={() => dispatch(setLamaxWeightType(data))}>{data.label}</div>
                                )
                            }

                        })
                    }
                </div>
            </div>
            <div className="set-comorbities-button" onClick={() => props.history.push("/selectcomoribities")} >
                SET COMORBIDITIES
            </div>

        </div>
    )
}

export default PatientProfile