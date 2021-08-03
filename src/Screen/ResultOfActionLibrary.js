import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
// import Tab from '../CustomComponent/Tab'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import '../css/ResulforActionLibrary.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { API_ROOT } from '../constants'

const optionsforage = [
    { value: 'Y', label: 'Year' },
    { value: 'M', label: 'Month' },
    { value: 'W', label: 'Week' },
    { value: 'D', label: 'Day' },
]

const optionsForWeight = [
    { value: 'KG', label: 'Kilogram' },
    { value: 'G', label: 'Gram' },

]


const ResultOfAction = (props) => {
    const [burgerMenu, setburgerMenu] = useState(false)
    const [header, setHeader] = useState(null)
    const [age, setAge] = useState(null)
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const [patientType, setPatientType] = useState(null)
    const [id, setId] = useState(null)
    const [drugId, setDrugId] = useState(null)
    const [parentName, setparentName] = useState(null)
    const [subParentName, setSubParentName] = useState(null)
    const [patientTypeArray, setpatientTypeArray] = useState([])
    const [ageType, setageType] = useState(null)
    const [weightType, setweightType] = useState(null)
    const [result, setResult] = useState([])
    const [resData, setResData] = useState([])
    const [resData2, setResData2] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    console.log(props);


    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search)
        setHeader(urlParams.get('name'))
        setId(urlParams.get('id'))
        setDrugId(urlParams.get('drugId'))
        // setparentName(urlParams.get('subName'))
        setparentName(props.location.state.parentName)
        setSubParentName(props.location.state.subParent)
        getPatientTypeData()
    }, [])

    console.log(subParentName);
    console.log(parentName);
    const getPatientTypeData = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }

        })
            .then(response => response.json())
            .then(res => {
                if (res.status === "true") {
                    res.data.patientTypes.forEach(element => {
                        element.value = element.id;
                        element.label = element.type_name;
                    });

                    setpatientTypeArray(res.data.patientTypes)
                }
            })
    }

    // console.log(patientTypeArray);

    const handleChangePatientType = selectedOption => {
        setPatientType(selectedOption.value);
        console.log(`Option selected:`, selectedOption.id);
    };



    const getResultfromApi = () => {
        console.log(parentName);
        var token = localStorage.getItem("token")
        if (parentName === "Crises") {
            fetch(API_ROOT + `action-library-search?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    "crises_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight": weight


                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        console.log(res.data)
                    }
                })

        } else if (parentName === "Case Tips") {
            fetch(API_ROOT + `action-library-search?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "caseTips_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight": weight
                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        console.log(res.data)
                    }
                })


        } else if (parentName === "Airway & Equipments") {
            fetch(API_ROOT + `action-library-search?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    "airwayAndEquipments_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight": weight


                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        console.log(res.data)
                    }
                })


        } else if (parentName === "Drugs") {
            console.log("run");
            if (subParentName === "ANTIBIOTIC CLASS") {
                console.log("run");
                fetch(API_ROOT + `drug-doses?token=${token}`, {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        dose_id: props.location.state.subId,
                        age: age,
                        weight: weight,

                    })

                })

                    .then(response => response.json())
                    .then(res => {
                        console.log(res)
                        if (res.status === "true") {
                            console.log(res.data)
                            setResData(res.data)
                        }
                    })
            }
            // fetch(API_ROOT + `drug_attributes?token=${token}`, {
            //     method: 'POST',

            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         drug_id: props.location.state.subId,
            //         drug_name: props.location.state.subName,
            //         parent_drug_name: props.location.state.parentName,
            //         age: age,
            //         age_type: ageType,
            //         weight: weight,
            //         weight_type: weightType,
            //         patient_type: patientType,
            //     })

            // })
            //     .then(response => response.json())
            //     .then(res => {
            //         console.log(res)
            //         if (res.status === "true") {
            //             console.log(res.data)
            //         }
            //     })
            else {
                console.log("run");
                fetch(API_ROOT + `drug-combined-attributes?token=${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        drug_id: props.location.state.subId,
                        drug_name: props.location.state.subName,
                        // parent_drug_name: props.location.state.parentName,
                        age: age,
                        weight: weight,
                        patient_type: patientType,
                    })

                })
                    .then(response => response.json())
                    .then(res => {
                        console.log(res)
                        if (res.status === "true") {
                            console.log(res.data)
                            setResData2(res.data)
                        }
                    })
            }


        } else if (parentName === "Preoperative Evaluations") {
            fetch(API_ROOT + `action-library-search?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    "preoperativeEvaluations_id": id,
                    "patient_age_days": 18,
                    "patient_type_id": patientType,
                    "patient_weight": weight


                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        console.log(res.data)
                    }
                })

        } else if (parentName === "Regional Anesthesia") {
            fetch(API_ROOT + `drug-combined-attributes?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    "regionalAndNAnesthesia_id": id,
                    "patient_age_days": 18,
                    "patient_type": patientType,
                    "patient_weight": weight
                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true") {
                        console.log(res.data)
                    }
                })

        }
    }

    const handleChangeAgeTpe = selectedOption => {
        if (selectedOption.value === "Y") {
            setAge(age * 365)
        } else if (selectedOption.value === "M") {
            setAge(age * 30)
        } else if (selectedOption.value === "W") {
            setAge(age * 7)
        } else if (selectedOption.value === "D") {
            setAge(age)
        }
        setageType(selectedOption.value);

        console.log(`Option selected:`, selectedOption);

    };

    const handleChangeWeightType = selectedOption => {
        setweightType(selectedOption.value);
        console.log(`Option selected:`, selectedOption);
    };


    return (
        <div >
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            <div className="result-main-container" >
                <div className="header-of-list-container" >
                    {/* <i className="material-icons down-icon" >play_arrow</i> */}
                    <h4 className="result-back-name"><Link to="/allaction" className="result-back-name"><span><i className="fas fa-arrow-left"></i></span>Back To {props.location.state.subName}</Link></h4>
                    <div>{header}</div>
                </div>

                <div className="dosing-container" >
                    <div className="row">
                        {/* <div className="col-md-1"></div> */}
                        {/* <div className="col-md-10"> */}
                        <div className="result-input-container" >
                            <div style={{ fontWeight: "bold" }}>Input</div>
                            <div style={{ fontWeight: "bold" }}>
                                Clear All
                            </div>
                        </div>
                        <div className="result-input-container" >
                            <div className="result-input-container-2">
                                <div>Age</div>
                                <div>    <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="result-age-input" />
                                </div>
                            </div>
                            <div>
                                <Select onChange={(value) => handleChangeAgeTpe(value)} placeholder="Year" className="result-age-type-dropdown" id="age" options={optionsforage} />

                            </div>
                        </div>
                        <div className="result-input-container" >
                            <div className="result-input-container-2">
                                <div>Weight</div>
                                <div>
                                    <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" className="result-age-input" />
                                </div>
                            </div>
                            <div>
                                <Select onChange={(value) => handleChangeWeightType(value)} placeholder="Weight Type" className="result-weight-type-dropdown" id="age" options={optionsForWeight} />

                            </div>
                        </div>


                        <div className="result-input-container-2" >
                            <div>Patient type</div>
                            <div>
                                <div className="patientype-input-container" >
                                    <Select onChange={(value) => handleChangePatientType(value)} placeholder="PATIENT TYPE" className="patientype-dropdown" id="patien-type" options={patientTypeArray} />
                                </div>

                            </div>
                        </div>
                        <br></br>

                        {/* </div> */}
                        {/* <div className="col-md-1"></div> */}
                    </div>
                </div>

                <div onClick={() => getResultfromApi()} className="submit-button">Submit</div>
                <div className="input-border" >

                </div>
                <div className="result-container" >
                    {
                        resData ?
                            resData.map((data, i) => {
                                console.log(data)
                                return (
                                    <>
                                        <div className="action-table">
                                            <table style={{ width: 1200 }}>
                                                <tr>
                                                    <th>First Dose mg/kg</th>
                                                    <th>First dose max</th>
                                                    <th>Admin Guidlines</th>
                                                    <th>Second Dose</th>
                                                    <th>Third Dose</th>
                                                    <th>Subsequent Dose</th>
                                                </tr>
                                                <tr>
                                                    <td>{data.first_dose_mg_per_kg}</td>
                                                    <td>{data.first_dose_maximum}</td>
                                                    <td>{data.admin_guidelines}</td>
                                                    <td>{data.second_dose}</td>
                                                    <td>{data.third_dose}</td>
                                                    <td>{data.subsequent_dose}</td>
                                                </tr>
                                                <tr>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                </tr>

                                            </table>
                                        </div>

                                    </>
                                )
                            })
                            : <></>
                    }
                    {
                        resData2 ?
                            resData2.map((data, i) => {
                                console.log(data)
                                return (
                                    <>
                                        <div className="action-table">
                                            <table style={{ width: 1200 }}>
                                                <tr>
                                                    <th>Bolus Dose Max </th>
                                                    <th>Administration Notes</th>
                                                    <th>Infusion Dose Max</th>
                                                    <th>Admin Route</th>
                                                </tr>
                                                <tr>
                                                    <td>{data.bolus_dose_max}</td>
                                                    <td>{data.administration_notes}</td>
                                                    <td>{data.infusion_dose_max}</td>
                                                    <td>{data.administration_route}</td>
                                                </tr>
                                                <tr>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                    <td><input style={{ height: 30, width: 200 }} placeholder="enter value"></input></td>
                                                </tr>

                                            </table>
                                        </div>

                                    </>
                                )
                            })
                            : <></>
                    }
                </div>




            </div>
        </div >
    )
}

export default ResultOfAction