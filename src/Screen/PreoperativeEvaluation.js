import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import '../css/preoperativeevalution.css'
import Spinner from '../CustomComponent/Spinner'
import { data } from 'jquery'
const PreoperativeEvaluation = (props) => {
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([])
    const [medicalHistory, setmedicalHistory] = useState([])
    const [medicationsArray, setmedicationsArray] = useState([])
    const [medication, setmedication] = useState([])
    const [diagnosisArray, setDiagnosis] = useState([])
    const [loading, setLoading] = useState(false)
    const [resShow, setResShow] = useState(false)
    const [res1, setRes1] = useState([])



    useEffect(() => {
        getCaseSummary()
    }, [])


    const getCaseSummary = async () => {
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
                if (res.status === "true" && res.message === "Case Summary Form Data") {

                    res.data.drugList.forEach(element => {
                        element.value = element.id;
                        element.label = element.drug_name
                    });

                    setmedicationsArray(res.data.medications)


                    setmedicalHistory(res.data.medicalHistories)
                    setLoading(true)
                }
            })


    }
    var obj = {
        name: ""
    }
    const onSiteChanged = (e, name) => {
        console.log(name);
        if (e.target.value === "Yes") {
            medicalHistoryArray.push(e.target.name)
        }
        obj = {
            name: name
        }
        diagnosisArray.push(obj)
        console.log(diagnosisArray);
    }

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const onMedicationValue = (e, obj) => {
        if (e.target.value === "Yes") {
            medication.push(obj)
        }

    }

    const handleClick = async () => {
        try {

            var token = localStorage.getItem("token")
            console.log(diagnosisArray)
            fetch(`http://admin.anesthesiaone.com/api/preop-testing?token=${token}`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    diagnosis: diagnosisArray

                })

            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    if (res.status === "true" && res.message === "Preoperative Testing results") {
                        console.log(res.data);
                        let myData = Object.keys(res.data).map(key => res.data[key]);
                        setRes1(myData)
                    } else {
                        alert(res.message)
                    }
                })


        } catch (error) {
            console.log(error);
        }
        setResShow(true)
    }


    console.log(res1)
    return (
        <div>


            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link> PREOPERATIVE EVALUATION
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container" >
                <div className="preoperative-medical-history-main-container" >
                    {loading ?
                        medicalHistory.map((data, i) => {
                            return (
                                <>
                                    <div style={{ width: "100%" }} >
                                        <div className="preoperative-medical-history-question-header" >
                                            <div style={{ fontWeight: "bold" }}>{i + 1}. {data.name}</div>

                                        </div>

                                        <div className="preoperative-medical-history-sub-question-sub-container" >
                                            {
                                                data.medical_history_sub_type.map((data) => {
                                                    return (
                                                        <div className="preoperative-sub-question-container" >
                                                            <div>{data.name}</div>
                                                            <div className="preoperative-option-box-container" >
                                                                <input onChange={(e) => onSiteChanged(e, data.name)} type="radio" value="Yes" name={data.name} /> Yes
                                                                <input onChange={(e) => onSiteChanged(e)} type="radio" value="No" name={data.name} /> No
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }



                                        </div>

                                    </div>
                                    <div className="all-action-subcontainer-content-1"></div>
                                </>

                            )
                        })
                        :
                        <Spinner />
                    }
                    <div className="preoperative-medical-history-question-header" style={{ fontWeight: 'bold' }}>3.Medication</div>

                    {
                        medicationsArray.map((data) => {
                            return (
                                <>
                                    <div className="preoperative-medication-sub-question-container" style={{ position: "relative", right: 45 }} >
                                        <div>{data.name}</div>
                                        <div className="preoperative-option-box-container" >
                                            <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="Yes" name={data.name} /> Yes
                                            <input onChange={(e) => onMedicationValue(e, data)} type="radio" value="No" name={data.name} /> No
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }




                </div>
            </div>

            <div className="all-action-subcontainer-content-1"></div>
            <div className="button-div-preop">
                <button onClick={() => handleClick()} className="btn save-button-container">Submit</button>
            </div>
            <div>
                {
                    resShow ?
                        <>
                            <div className="action-table" style={{ display: "flex", justifyContent: "center" }}>
                                <table style={{ width: 800 }}>
                                    <tr>
                                        <th>Diagnosis</th>
                                        <th>Medication</th>
                                    </tr>
                                    <>
                                        {
                                            res1.map((data) => {
                                                return (
                                                    <>
                                                        {
                                                            data.map((data1) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{data1.diagnosis}</td>
                                                                            <td>{data1.medication}</td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </>

                                </table>

                            </div>

                        </>
                        :
                        <>
                        </>
                }
            </div>


        </div>
    )
}

export default PreoperativeEvaluation