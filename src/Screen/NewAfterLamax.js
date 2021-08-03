import React, { useEffect, useState } from 'react'
import { API_ROOT } from '../constants'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import LamaxSubHeader from "./LamaxSubHeader"
import Select from 'react-select'
import "../css/newLamaxHeader.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNewComorbities, setNewGenderType, setNewHeightType, setNewLamaxHeight, setNewLamaxWeight, setNewWeightType } from '../redux/NewLamaxActions'

const NewAfterLamax = (props) => {
    const [comorbitiesValue, setComorbitiesValue] = useState([])
    const dispatch = useDispatch()
    const newWeightType = useSelector(state => state.newLamax.newWeightType)
    const newHeightType = useSelector(state => state.newLamax.newHeightType)
    const weight2 = useSelector(state => state.newLamax.weight2)
    const height2 = useSelector(state => state.newLamax.height2)
    const newGenderValue = useSelector(state => state.newLamax.newGenderValue)
    const [comorbities, setComorbities] = useState([])
    const [checked, setChecked] = useState(false);
    const [mass, setMass] = useState("Manual Entry")
    const [arr, setarr] = useState([])
    // const [button, setButton] = useState(false)
    useEffect(() => {
        getLAMAXData()

    }, [])
    const getLAMAXData = () => {
        var token = localStorage.getItem('token')
        fetch(API_ROOT + `la-max-drugs?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                console.log(res.data)
                if (res.status === "true" && res.message === "LA Max Drugs") {
                    setComorbities(res.data.comorbidity)
                } else {
                    alert(res.message)
                }
            })

    }

    console.log(props.location.state);
    const weightOptions = [
        { value: 'Manual Entry', label: 'Manual Entry' },
        { value: 'Calculated Lean Body Mass', label: "Calculated Lean Body Mass" },
    ];
    const weightTypes = [
        { value: 'KG', label: 'KG' },
        { value: 'LB', label: "LB" },
    ];

    const heightTypes = [
        { value: 'CM', label: 'CM' },
        { value: 'IN', label: "IN" },
    ];

    const genderTypes = [
        { value: 'MALE', label: 'MALE' },
        { value: 'FEMALE', label: "FEMALE" },
    ];
    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    const ddChange = (data) => {
        setMass(data.value)
    }

    var obj = {
        name: "",
        value: "",
        msg: ""
    }

    const onSelectComborbities = (comorbidityName, comorbidityValue, comorbidityMsg) => {
        obj = {
            name: comorbidityName,
            value: comorbidityValue,
            msg: comorbidityMsg
        }
        comorbitiesValue.push(obj)
        arr.push(comorbidityName)
    }

    console.log(mass)
    return (
        <div>
            <LamaxSubHeader name={props.location.state} text='LOCAL ANESTHETIC MAX' />
            {/* <div className="newLamaxDiv">
            </div> */}
            <div className="main-container">
                <div className="tableHeaderBg text-center pt-1 mt-3">
                    <div><strong>Step 1 of 2: Enter Patient data</strong></div>
                </div>
                <div className="ANESTHESIA-type-input-container">
                    <h5>STEP 1- a:</h5>
                    <div className="mt-2 mb-2">ENTER WEIGHT</div>
                    <Select className="newLamaxDd" defaultValue={weightOptions.filter(opt => opt.label === "Manual Entry")} onChange={(value) => ddChange(value)} options={weightOptions} placeholder="Select Weight Type" />
                    {
                        mass === "Manual Entry" ?
                            <>
                                <div className="dd">


                                    <div className="dd-inner">

                                        <span className="pt-2">WEIGHT</span><input className="ant-text-input mr-2" onChange={(e) => dispatch(setNewLamaxWeight(e.target.value))} placeholder="Weight"></input>
                                        <div className="btn-group">
                                            {
                                                weightTypes.map((data, i) => {
                                                    if (data.value === "KG" && newWeightType === "") {
                                                        return (
                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                    else {
                                                        if (data.value === newWeightType.value) {
                                                            return (
                                                                <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</button>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</button>
                                                            )
                                                        }
                                                    }

                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="lamaxBtn">
                                </div>
                            </>
                            :
                            <>
                                <div className="dd">
                                    <div className="dd-inner">
                                        <span className="pt-2">GENDER</span>
                                        <div className="btn-group">
                                            {
                                                genderTypes.map((data, i) => {
                                                    if (data.value === newGenderValue.value) {
                                                        return (
                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewGenderType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setNewGenderType(data))}>{data.label}</button>
                                                        )
                                                    }

                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="dd-inner">
                                        <span className="pt-2 mr-1">WEIGHT</span><input onChange={(e) => dispatch(setNewLamaxWeight(e.target.value))} placeholder="Weight" className="ant-text-input mr-2"></input>
                                        <div className="btn-group">
                                            {
                                                weightTypes.map((data, i) => {
                                                    if (data.value === newWeightType.value) {
                                                        return (
                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setNewWeightType(data))}>{data.label}</button>
                                                        )
                                                    }

                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="dd-inner">
                                        <span className="pt-2">HEIGHT</span><input onChange={(e) => dispatch(setNewLamaxHeight(e.target.value))} placeholder="Height" className="ant-text-input mr-2"></input>
                                        <div className="btn-group">
                                            {
                                                heightTypes.map((data, i) => {
                                                    if (data.value === newHeightType.value) {
                                                        return (
                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setNewHeightType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setNewHeightType(data))}>{data.label}</button>
                                                        )
                                                    }

                                                })
                                            }
                                        </div>
                                    </div>


                                </div>
                                <h4 style={{ textAlign: "center", margin: 20, color: "grey" }}>The Calculated Lean Body Mass is {newGenderValue.label ? newGenderValue.label === "MALE" ? (((0.407 * weight2) + (0.267 * height2) - 19.2).toFixed(1)) : (((0.252 * weight2) + (0.473 * height2) - 48.3).toFixed(1)) : 0}KG</h4>
                            </>

                    }
                    <br></br>
                    <h5>STEP 1- b:</h5>
                    <div className="mt-2 mb-2">SELECT COMORBITIES</div>
                    <div className="select-comoribities-list-main-container" >
                        {comorbities.map((data) => {
                            console.log(comorbitiesValue)
                            if (arr.includes(data.comorbidities)) {
                                return (
                                    <div className="select-comoribities-list-2">
                                        <div className="selected-comorbidity">{data.comorbidities}</div>
                                        <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectComborbities(data.comorbidities, data.reduction_per, data.warning_msg) }} type="checkbox"></input>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="select-comoribities-list">
                                        <div className="selected-comorbidity">{data.comorbidities}</div>
                                        <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectComborbities(data.comorbidities, data.reduction_per, data.warning_msg) }} type="checkbox"></input>
                                    </div>
                                )
                            }
                        })


                        }
                    </div>
                </div>
                <button className="newLamaxBtn save-button-container" onClick={() => {
                    props.history.push({
                        pathname: "/newAfterLamax2",
                        state: { comorbitiesValue: comorbitiesValue }
                    });
                    dispatch(setNewComorbities(comorbitiesValue))
                }}>Next<span style={{ marginLeft: 5, marginRight: 5 }}></span><i className="fas fa-play"></i></button>

            </div>
        </div>
    )
}

export default NewAfterLamax
