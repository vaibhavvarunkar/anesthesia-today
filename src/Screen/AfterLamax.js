import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/Lamax.css"
import { API_ROOT } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setDose } from '../redux/LamaxActions'

const AfterLamax = (props) => {
    const dose = useSelector(state => state.lamax.dose)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)
    const [data, setData] = useState([])
    const [comorbidity, setComorbidity] = useState([])
    const [anesthesiaData, setanesthesiaData] = useState([])
    const [checked, setChecked] = useState(false);
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
                    setData(res.data.drugs)
                    setComorbidity(res.data.comorbidity)
                } else {
                    alert(res.message)
                }
            })

    }

    const content = [
        {
            value: "Bupivacaine",
            subValues: ["Plain", "Epinephrine"]
        },
        {
            value: "Lidocaine",
            subValues: ["Plain", "Epinephrine"]
        },
        {
            value: "Mepavacaine",
            subValues: ["Plain", "Epinephrine"]
        },
        {
            value: "Ropivacaine",
            subValues: ["Plain", "Epinephrine"]
        }
    ]
    var obj = {
        name: "",
        value: "",
        dosageMaxValue: ""
    }
    const onSelectAnesthesia = (value, valueType, plainValue) => {
        console.log(valueType, value, plainValue)
        obj = {
            name: value,
            type: valueType,
            dosageMaxValue: plainValue
        }
        anesthesiaData.push(obj)

    }
    return (
        <>
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/anesthesiatype"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Select Anesthetics</h3>
                </nav>
                <div className="count-div">
                    <h4 className="count">Number Selected: {number}</h4>
                </div>
            </div>
            <div className="medicines">
                {data.map((medicine) => {
                    return (
                        <div className="main-medicine">

                            <div className="main-bg row">
                                <div className="col-8">
                                    <h4><i className="fas fa-syringe syringe"></i> {medicine.name}</h4>
                                </div>
                                <div className="col-4">
                                    <h4> <i className="fas fa-info-circle info text-right"></i></h4>
                                </div>
                            </div>
                            <div className="capsule">
                                <div className="sub-medicine row my-2">
                                    <div className="col-8">
                                        <h5>Plain</h5>
                                    </div>
                                    <div className="col-4">
                                        <input defaultChecked={checked} type="checkbox" onChange={() => { setChecked(!checked); onSelectAnesthesia(medicine.name, "Plain", medicine.plain_max) }} ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="capsule">
                                <div className="sub-medicine row my-2">
                                    <div className="col-8">
                                        <h5>Epinephrine</h5>
                                    </div>
                                    <div className="col-4">
                                        <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectAnesthesia(medicine.name, "Epinephrine", medicine.epinephrine_max) }} type="checkbox"></input>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )
                })}
                <div className="next-button" onClick={() => {
                    props.history.push({
                        pathname: '/selecconcentrations',
                        state: { anesthesiaData: anesthesiaData }
                    });
                    dispatch(setDose(anesthesiaData))
                }
                } >NEXT</div>
            </div>
        </>
    )
}


export default AfterLamax
