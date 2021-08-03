import React, { useEffect, useState } from 'react'
import { API_ROOT } from '../constants'
import { Link } from 'react-router-dom'
import Header from '../CustomComponent/Header'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import LamaxSubHeader from "./LamaxSubHeader"
import Select from 'react-select'
import "../css/newLamaxHeader.css"
import { useDispatch, useSelector } from 'react-redux'
import { setNewAdminValue, setNewConc, setNewDrug1, setMedType, setmixtureValue1, setmixtureValueA } from '../redux/NewLamaxActions'
import { setNewAdminValue2, setNewConc2, setNewDrug2, setMedType2, setDocValue1, setDocValue2 } from '../redux/NewLamaxActions'
import { StyleSheetManager } from 'styled-components'

const NewAfterLamax2 = (props) => {
    console.log(props);
    const [drugData, setDrugData] = useState([])
    const [anesthesiaData, setAnesthesiaData] = useState([])
    const [anesthesiaData2, setAnesthesiaData2] = useState([])
    const [consume, setConsume] = useState(0)
    const [remaining1, setRemaining] = useState(0)
    const [checkedNum, setCheckedNum] = useState(0)
    const [arr, setArr] = useState([])
    const [arr2, setArr2] = useState([])

    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    const newAdminValue2 = useSelector(state => state.newLamax.newAdminValue2)
    // const drug2 = useSelector(state => state.newLamax.drug2)
    const newConc2 = useSelector(state => state.newLamax.newConc2)
    const weight2 = useSelector(state => state.newLamax.weight2)
    const newComorbities = useSelector(state => state.newLamax.newComorbities)
    const drug1 = useSelector(state => state.newLamax.drug1)
    const drug2 = useSelector(state => state.newLamax.drug2)
    const newConc = useSelector(state => state.newLamax.newConc)
    const newAdminValue = useSelector(state => state.newLamax.newAdminValue)
    const medType = useSelector(state => state.newLamax.medType)
    const medType2 = useSelector(state => state.newLamax.medType2)
    const docValue1 = useSelector(state => state.newLamax.docValue1)
    const docValue2 = useSelector(state => state.newLamax.docValue2)
    const mixValueA = useSelector(state => state.newLamax.mixValueA)
    const mixValueB = useSelector(state => state.newLamax.mixValueB)
    const [drugBState, setDrugBstate] = useState(false)

    const [option, setOption] = useState([])
    const mixtureOptions = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Mixture', label: "Mixture" },
    ];

    var totalReduction = 0;

    newComorbities.map((data) => {
        totalReduction = totalReduction + parseInt(data.value) / 100
    })
    const [checked, setChecked] = useState(false);


    const [refresh, setrefresh] = useState({})

    const [doc, setDoc] = useState(false)

    const dispatch = useDispatch()


    useEffect(() => {
        getLAMAXData()

    }, [])

    useEffect(() => {

    }, [refresh])

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
                    setDrugData(res.data.drugs)
                    console.log(res.data.drugs);
                } else {
                    alert(res.message)
                }
            })

    }

    var obj = {
        name: "",
        pValue: "",
        eValue: ""
    }

    const medTypes = [
        { value: 'Plain', label: 'Plain' },
        { value: 'Epinephrine', label: "W/Epi" },
    ];

    // var checkedNum = 0;

    var resultValue1 = 0;
    var resultValue2 = 0;

    const countCheck = () => {
        setCheckedNum(checkedNum + 1)
        setChecked(!checked)
    }

    const onClickDrugA = (value, pValue, eValue) => {
        obj = {
            name: value,
            pValue: pValue,
            eValue: eValue
        }
        anesthesiaData.push(obj)
        dispatch(setNewDrug1(obj))
        arr.push(value)

        if (value === "Not Listed") {
            setDoc(!doc)
        }
        setrefresh({})
    }


    const onClickDrugB = (value, pValue, eValue) => {
        console.log(value);
        obj = {
            name: value,
            pValue: pValue,
            eValue: eValue
        }
        anesthesiaData2.push(obj)
        dispatch(setNewDrug2(obj))
        arr2.push(value)
        if (value === "Not Listed") {
            setDoc(!doc)
        }
        setrefresh({})
    }

    const onChangeAdminValue = (value) => {
        console.log(value);
        dispatch(setNewAdminValue(value));
    }

    const onChangeAdminValue2 = (value) => {
        console.log(value);
        dispatch(setNewAdminValue2(value));
    }

    const reset = () => {
        dispatch(setNewDrug1([]))
    }
    const reset2 = () => {
        dispatch(setNewDrug2([]))
    }
    const [mixtureValue, setMixtureValue] = useState(null)
    const reset3 = () => {
        dispatch(setmixtureValueA([]))
    }

    const [mix, setMix] = useState(null)
    const [showmix, setShowMix] = useState(false)
    const mixtureChange = (name) => {
        console.log(name.value);
        setMix(name.value)
        setShowMix(!showmix)
    }

    const mixtureRatioOptions = [
        { value: "1:1", label: "1:1 Mixture Of Drug A1 : Drug A2" },
        { value: "1:2", label: "1:2 Mixture Of Drug A1 : Drug A2" },
        { value: "1:3", label: "1:3 Mixture Of Drug A1 : Drug A2" },
        { value: "1:4", label: "1:4 Mixture Of Drug A1 : Drug A2" },

    ]


    const [drugAPercent, setDrugAPercent] = useState(0)
    const [drugBPercent, setDrugBPercent] = useState(0)
    const setMixValue = (val) => {
        console.log("run");
        console.log(val);
        // setMixtureValue(val.value)
        dispatch(setmixtureValueA(val))
        setDrugAPercent((parseInt(val.value[0]) / (parseInt(val.value[0]) + parseInt(val.value[2]))) * 100)
        setDrugBPercent((parseInt(val.value[2]) / (parseInt(val.value[0]) + parseInt(val.value[2]))) * 100)
    }

    var mixtureA = 0
    var mixtureB = 0
    var surgeonA = 0
    var surgeonB = 0
    var perValue = 0
    return (
        <div>
            <LamaxSubHeader text="LOCAL ANESTHETIC MAX" />
            <div className="main-container">
                <div className="tableHeaderBg text-center pt-1 mt-3">
                    <div><strong>Step 2 of 2: 1st Admin</strong></div>
                </div>
                <div className="ANESTHESIA-type-input-container">
                    <h5>STEP 2- a: DRUG PREPARATION</h5>
                    <Select className="newLamaxDd" onChange={(value) => mixtureChange(value)} defaultValue={mixtureOptions.filter(opt => opt.label === "Individual")} placeholder="select mixture type" options={mixtureOptions} />
                    {
                        showmix ? <>
                            <div style={{ marginTop: 10 }}>
                                <h5 style={{ marginTop: 10, textAlign: "center" }}><strong>Select Mixture Ratio</strong></h5>
                                {
                                    mixValueA.length === 0 ?
                                        <>
                                            {
                                                mixtureRatioOptions.map((drug, i) => {
                                                    return (
                                                        <div className="med-name">
                                                            <h6 style={{ color: "black" }} onClick={() => setMixValue(drug)}>{drug.label}</h6>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </>
                                        :
                                        <>
                                            <div className="med-name-2">
                                                <h6 style={{ color: "black" }} onClick={reset3} >{mixValueA.label}</h6>
                                            </div>
                                        </>
                                }
                            </div>
                        </>
                            :
                            <>
                            </>
                    }
                    <div className="lamaxContent"><br />
                        <h5 className="text-center">STEP 2- b: SELECT DRUGS</h5>
                        <div className="mt-2 mb-2"><strong>DRUG A</strong></div>

                        <div >
                            <div className="main-bg-med">
                                {/* {
                            drugData.map((drug, i) => {
                                console.log(checkedNum)
                                if (arr.includes(drug.name)) {
                                    return (
                                        <div className="med-name-2">
                                            <h4 style={{ color: "black" }} onClick={() => onClickDrugA(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h4>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div className="med-name">
                                            <h4 style={{ color: "black" }} onClick={() => onClickDrugA(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h4>
                                        </div>
                                    )
                                }
                            })

                        } */}
                                {
                                    drug1.length === 0 ?
                                        <>
                                            {
                                                drugData.map((drug, i) => {
                                                    return (
                                                        <div className="med-name">
                                                            <h6 style={{ color: "black" }} onClick={() => onClickDrugA(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h6>
                                                        </div>
                                                    )
                                                }
                                                )
                                            }
                                        </>
                                        :
                                        <>
                                            <div className="med-name-2">
                                                <h6 style={{ color: "black" }} onClick={reset} >{drug1.name}</h6>
                                            </div>
                                        </>
                                }
                            </div>
                            {
                                doc ?
                                    <>
                                        <span>Max Dose Plain, mg/kg<input className="ant-text-input" style={{ marginLeft: 25, marginBottom: 10, }} onChange={(e) => dispatch(setDocValue1(e.target.value))}></input></span>
                                        <br></br>
                                        <span>Max Dose W/Epi, mg/kg <input className="ant-text-input" style={{ marginLeft: 10 }} onChange={(e) => dispatch(setDocValue2(e.target.value))}></input></span>
                                        <br></br>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                            <div className="dd">
                                <div className="dd-inner">
                                    <span className="pt-2">TYPE</span>
                                    <div className="btn-group">
                                        {
                                            medTypes.map((data, i) => {
                                                console.log(medType2)
                                                if (data.label === "Plain" && medType === "") {
                                                    return (
                                                        <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setMedType(data))}>{data.label}</button>
                                                    )
                                                }
                                                else {
                                                    if (data.value === medType.value) {
                                                        return (
                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setMedType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setMedType(data))}>{data.label}</button>
                                                        )
                                                    }
                                                }

                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <span>% Concentration<input className="ant-text-input" style={{ marginLeft: 25, marginBottom: 10, }} onChange={(e) => dispatch(setNewConc(e.target.value / 100))}></input></span>
                            <br></br>
                            <span>Admin volume, ml <input className="ant-text-input" style={{ marginLeft: 10 }} onChange={(e) => onChangeAdminValue(e.target.value)}></input></span>
                            <br /><br />
                            {
                                doc ?
                                    <>
                                        <h6>{docValue1 ? resultValue1 = (((docValue1 * weight2) / newConc).toFixed(0) - ((docValue1 * weight2) / newConc).toFixed(0) * totalReduction).toFixed(0) / 1000 : resultValue1 = (((docValue2 * weight2) / newConc).toFixed(0) - ((docValue2 * weight2) / newConc).toFixed(0) * totalReduction).toFixed(0) / 1000}  % of total LA MAX given.</h6>
                                        <br></br>
                                        <h6>Mixture Value For Drug A: {mixtureA = (drugAPercent / 100) * resultValue1} mL</h6>
                                        <br></br>
                                        <h6>{(newAdminValue / resultValue1) * 100} ml of drug B remaining.</h6>
                                    </>
                                    :
                                    <>
                                        <h6>{medType.label === "Plain" || medType === "" ? resultValue1 = (((drug1.pValue * weight2) / newConc).toFixed(0) - ((drug1.pValue * weight2) / newConc).toFixed(0) * totalReduction).toFixed(0) / 1000 : resultValue1 = (((drug1.eValue * weight2) / newConc).toFixed(0) - ((drug1.eValue * weight2) / newConc).toFixed(0) * totalReduction).toFixed(0) / 1000}  % of total LA MAX given.</h6>
                                        <br></br>
                                        <h6>Mixture Value For Drug A: {mixtureA = (drugAPercent / 100) * resultValue1} mL</h6>
                                        <br></br>
                                        {/* <h6>{(newAdminValue / resultValue1) * 100} ml of drug A remaining.</h6> */}


                                    </>
                            }
                            <br>
                            </br>
                            <br></br>
                            {
                                drugBState ?
                                    <>
                                        <div className="lamaxContent">
                                            <div className="mt-2 mb-2"><strong>DRUG B</strong></div>

                                            <div>
                                                <div className="main-bg-med">
                                                    {/* {
                                                drugData.map((drug, i) => {
                                                    console.log(checkedNum)
                                                    if (arr2.includes(drug.name)) {
                                                        return (
                                                            <div className="med-name-2">
                                                                <h4 style={{ color: "black" }} onClick={() => onClickDrugB(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h4>
                                                            </div>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <div className="med-name">
                                                                <h4 style={{ color: "black" }} onClick={() => onClickDrugB(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h4>
                                                            </div>
                                                        )
                                                    }
                                                })

                                            } */}
                                                    {
                                                        drug2.length === 0 ?
                                                            <>
                                                                {
                                                                    drugData.map((drug, i) => {
                                                                        return (
                                                                            <div className="med-name">
                                                                                <h6 style={{ color: "black" }} onClick={() => onClickDrugB(drug.name, drug.plain_max, drug.epinephrine_max)}>{drug.name}</h6>
                                                                            </div>
                                                                        )
                                                                    }
                                                                    )
                                                                }
                                                            </>
                                                            :
                                                            <>
                                                                <div className="med-name-2">
                                                                    <h4 style={{ color: "black" }} onClick={reset2} >{drug2.name}</h4>
                                                                </div>
                                                            </>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                doc ?
                                                    <>
                                                        <span>Max Dose Plain, mg/kg<input className="ant-text-input" style={{ marginLeft: 25, marginBottom: 10, }} onChange={(e) => dispatch(setDocValue1(e.target.value))}></input></span>
                                                        <br></br>
                                                        <span>Max Dose W/Epi, mg/kg <input className="ant-text-input" style={{ marginLeft: 10 }} onChange={(e) => dispatch(setDocValue2(e.target.value))}></input></span>
                                                        <br></br>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            <div className="dd">
                                                <div className="dd-inner">
                                                    <span className="pt-2">TYPE</span>
                                                    <div className="btn-group">
                                                        {
                                                            medTypes.map((data, i) => {
                                                                if (data.label === "Plain" && medType2 === "") {
                                                                    return (
                                                                        <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setMedType2(data))}>{data.label}</button>
                                                                    )
                                                                }
                                                                else {
                                                                    if (data.value === medType2.value) {
                                                                        return (
                                                                            <button className="btn weight-type-button-selected-of-patient-profile" onClick={() => dispatch(setMedType2(data))}>{data.label}</button>
                                                                        )
                                                                    }
                                                                    else {
                                                                        return (
                                                                            <button className="btn weight-type-button-of-patient-profile" onClick={() => dispatch(setMedType2(data))}>{data.label}</button>
                                                                        )
                                                                    }
                                                                }

                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <span>% Concentration <input className="ant-text-input" style={{ marginLeft: 25, marginBottom: 10, }} onChange={(e) => dispatch(setNewConc2(e.target.value / 100))}></input></span>
                                            <br></br>
                                            <span>Admin volume, ml <input className="ant-text-input" style={{ marginLeft: 10 }} onChange={(e) => onChangeAdminValue2(e.target.value)}></input></span>
                                            <br></br>
                                            {
                                                doc ?
                                                    <>
                                                        <h6>{docValue1 ? resultValue2 = (((docValue1 * weight2) / newConc2).toFixed(0) - ((docValue1 * weight2) / newConc2).toFixed(0) * totalReduction).toFixed(0) / 1000 : resultValue2 = (((docValue2 * weight2) / newConc2).toFixed(0) - ((docValue2 * weight2) / newConc2).toFixed(0) * totalReduction).toFixed(0) / 1000}  % of total LA MAX given.</h6>
                                                        <br></br>
                                                        <h6>Mixture Value For Drug B: {mixtureB = (drugBPercent / 100) * resultValue2} mL</h6>
                                                        <br></br>
                                                        <h6>{(newAdminValue2 / resultValue2) * 100} ml of drug B remaining.</h6>
                                                    </>
                                                    :
                                                    <>
                                                        <h6>{medType2.label === "Plain" || medType2 === "" ? resultValue2 = (((drug2.pValue * weight2) / newConc2).toFixed(0) - ((drug2.pValue * weight2) / newConc2).toFixed(0) * totalReduction).toFixed(0) / 1000 : resultValue2 = (((drug2.eValue * weight2) / newConc2).toFixed(0) - ((drug2.eValue * weight2) / newConc2).toFixed(0) * totalReduction).toFixed(0) / 1000}  % of total LA MAX given.</h6>
                                                        <br></br>
                                                        <h6>Mixture Value For Drug B: {mixtureB = (drugBPercent / 100) * resultValue2} mL</h6>
                                                        <br></br>
                                                        <h6>Remaining Value: {perValue = 100 - ((newAdminValue / resultValue1) * 100 + ((newAdminValue2 / resultValue2) * 100))}</h6>
                                                        <br></br>
                                                        <h6>Surgeon Value for A: {perValue / 100 * mixtureA}</h6>
                                                        <br></br>
                                                        <h6>Surgeon Value for B: {perValue / 100 * mixtureB}</h6>

                                                    </>
                                            }
                                            <br>
                                            </br>
                                            <br></br>
                                        </div>
                                        {/* </div> */}
                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </div>

                        <button className="newLamaxBtn add-drug-btn save-button-container" onClick={() => setDrugBstate(!drugBState)} ><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>DRUG</button>



                    </div>
                    <br></br>
                    <button className="newLamaxBtn save-button-container" style={{ float: "left" }} onClick={() => props.history.push("/newAfterLamax")}><i style={{ marginRight: 15 }} className="fas fa-play rotate"></i>Back</button>
                </div >
            </div>
        </div >
    )
}

export default NewAfterLamax2
