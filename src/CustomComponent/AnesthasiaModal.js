import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import "../css/Lamax.css"
import { API_ROOT } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
// import { setDose } from '../redux/LamaxActions'
import "../css/anesthasia-modal.css"
import { setMixDose } from '../redux/MixtureActions'

const AnesthasiaModal = (props) => {
    // const customStyles = {
    //     content: {
    //         // top: '12%',
    //         // left: '60%',
    //         // right: 'auto',
    //         // bottom: 'auto',
    //         // marginRight: '-50%',
    //         // backgroundColor: "white",
    //         // width: 100,
    //         // height: 1000
    //         height: 1000,
    //         width: 1500,
    //     }
    // };
    const mixDose = useSelector(state => state.mixture.mixDose)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)
    const [data, setData] = useState([])
    const [comorbidity, setComorbidity] = useState([])
    const [anesthesiaMixData, setAnesthesiaMixData] = useState([])
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
    const onSelectAnesthesiaMix = (value, valueType, plainValue) => {
        console.log(valueType, value, plainValue)
        obj = {
            name: value,
            type: valueType,
            dosageMaxValue: plainValue
        }
        anesthesiaMixData.push(obj)

    }
    return (
        <div>
            <Modal
                isOpen={props.modal}
                onRequestClose={props.onClose}
                // style={customStyles}
                style="../css/anesthasia-modal.css"
                contentLabel="Example Modal"
            >
                <>
                    <div className="modal-div">
                        <div className="main-div">
                            <nav>
                                <Link className="arrow" to="/afterlamax"><h3><i className="fas fa-arrow-left"></i></h3></Link>
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
                                                    <input type="checkbox" onChange={() => { onSelectAnesthesiaMix(medicine.name, "Plain", medicine.plain_max) }} ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="capsule">
                                            <div className="sub-medicine row my-2">
                                                <div className="col-8">
                                                    <h5>Epinephrine</h5>
                                                </div>
                                                <div className="col-4">
                                                    <input onChange={() => { onSelectAnesthesiaMix(medicine.name, "Epinephrine", medicine.epinephrine_max) }} type="checkbox"></input>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                )
                            })}
                            <div className="next-button" onClick={() => {
                                dispatch(setMixDose(anesthesiaMixData));
                                props.onClose()
                            }
                            } >NEXT</div>
                        </div>
                    </div>
                </>
            </Modal>
        </div>
    )
}

export default AnesthasiaModal
