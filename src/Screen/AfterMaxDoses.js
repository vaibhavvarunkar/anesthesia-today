import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import "../css/aftermaxdoses.css"
import AnesthasiaModal from '../CustomComponent/AnesthasiaModal'
import { setMixConcentration } from '../redux/MixtureActions'

const AfterMaxDoses = (props) => {
    // console.log(props.location.state.remaining)
    const [show, setShow] = useState(false)
    const [showModal1, setShowModal1] = useState(false)
    const [showBtn, setShowBtn] = useState(false)
    const [concentrationMixData, setConcentrationMixData] = useState([])
    const mixDose = useSelector(state => state.mixture.mixDose)
    const [mixtureRatio, setMixtureRatio] = useState(null)
    const [drugAPercent, setDrugAPercent] = useState(0)
    const [drugBPercent, setDrugBPercent] = useState(0)
    const weightType = useSelector(state => state.lamax.weightType)
    const lamaxComorbities = useSelector(state => state.lamax.lamaxComorbities)
    const [drugAConc, setDrugAConc] = useState("")
    const [drugBConc, setDrugBConc] = useState("")
    var totalReduction = 0;
    const dispatch = useDispatch()
    const handleClose = () => {
        setShowModal1(!showModal1)
    }

    const drugA = mixDose[0]
    const drugB = mixDose[1]
    var x = 0

    console.log(drugA, drugB);
    console.log(mixDose);


    lamaxComorbities.map((data) => {
        // console.log(data);
        totalReduction = totalReduction + parseInt(data.value) / 100
    })

    var obj = {
        name: "",
        value: ""
    }
    const saveMixConcentrations = (mixConname, mixConvalue) => {
        // console.log(Conname, Convalue)
        obj = {
            name: mixConname,
            value: mixConvalue / 100,
        }
        concentrationMixData.push(obj)
    }
    const mixtureOptions = [
        {
            value: "1:1",
            label: "1:1"
        },
        {
            value: "1:2",
            label: "1:2"
        },
        {
            value: "1:3",
            label: "1:3"
        },
        {
            value: "1:4",
            label: "1:4"
        },


    ]

    const handleChange = selectedOption => {
        setMixtureRatio(selectedOption)
        console.log(selectedOption);
        setDrugAPercent((parseInt(selectedOption[0]) / (parseInt(selectedOption[0]) + parseInt(selectedOption[2]))) * 100)
        setDrugBPercent((parseInt(selectedOption[2]) / (parseInt(selectedOption[0]) + parseInt(selectedOption[2]))) * 100)
    }
    console.log(drugAPercent);
    var resultOfDrugA = 0
    var resultOfDrugB = 0
    var mixtureA = 0
    var mixtureB = 0
    var surgeonA = 0
    var surgeonB = 0
    return (
        <>
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/maxdoses"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Mixture</h3>
                </nav>
            </div>

            <AnesthasiaModal modal={showModal1} onClose={handleClose} className="anesthasia-modal" />


            <div className="after-max-doses">
                <h3>Remaining: {props.location.state.remaining}%</h3>
                <div className="mixture">
                    <Link className="mixture-btn" to="/afterlamax">Drug</Link>
                    <button className="mixture-btn" onClick={() => setShow(!show)}>Mixture</button>
                </div>

                {show ?
                    <div>
                        <Select placeholder="Select Mixture Ratio" options={mixtureOptions} onChange={((value) => handleChange(value.value))} />
                    </div>
                    : null}
                {mixtureRatio !== null ?
                    <div className="modal-btn">
                        <button className="mixture-btn" onClick={() => setShowModal1(!showModal1)}>Drug  A</button>
                        <button className="mixture-btn" onClick={() => setShowModal1(!showModal1)}>Drug  B</button>
                    </div>
                    : null}
                {
                    mixDose.length ?
                        <div className="ratio-div">
                            <h4>{mixDose[0].name} ({mixDose[0].type})</h4>
                            <input type="number" onChange={(e) => setDrugAConc(e.target.value)}></input>
                        </div>
                        : <div></div>
                }
                {
                    mixDose.length ?
                        < div className="result-div">
                            <h4>Max Dose: {resultOfDrugA = (((mixDose[0].dosageMaxValue * weightType) / drugAConc * 100) - (((mixDose[0].dosageMaxValue * weightType) / drugAConc * 100) * totalReduction)) / 1000} mL</h4>
                            <br></br>
                            <h4>Mixture Value For Drug A: {mixtureA = (drugAPercent / 100) * resultOfDrugA} mL</h4>
                            <br></br>
                            <h4>Surgeon Drug Value: {surgeonA = mixtureA * (props.location.state.remaining / 100)} mL</h4>
                        </div>
                        : <div></div>
                }
                {
                    mixDose.length === 2 ?
                        <div className="ratio-div">
                            <h4>{mixDose[1].name} ({mixDose[1].type})</h4>
                            <input type="number" onChange={(e) => setDrugBConc(e.target.value)}></input>
                        </div>
                        : <div></div>
                }
                {
                    mixDose.length === 2 ?
                        < div className="result-div">
                            <h4>Max Dose: {resultOfDrugB = (((mixDose[1].dosageMaxValue * weightType) / drugBConc * 100) - (((mixDose[1].dosageMaxValue * weightType) / drugBConc * 100) * totalReduction)) / 1000} mL</h4>
                            <br></br>
                            <h4>Mixture Value For Drug B: {mixtureB = (drugBPercent / 100) * resultOfDrugB} mL</h4>
                            <br></br>
                            <h4>Surgeon Drug Value: {surgeonB = mixtureB * (props.location.state.remaining / 100)} mL</h4>
                            <br></br>
                            <h2>Total Surgeon Value: {surgeonA + surgeonB}</h2>
                        </div>
                        : <div></div>
                }

            </div>
        </>
    )
}

export default AfterMaxDoses
