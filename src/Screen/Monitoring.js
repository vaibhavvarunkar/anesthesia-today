import React, { useState } from 'react'
// import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import "../css/Monitoring.css"
// import { data } from 'jquery'
import { API_ROOT } from '../constants'
// import { handleInputChange } from 'react-select/src/utils'

const Monitoring = (props) => {
    const [monitoring, setmonitoring] = useState([
        { label: 'All Standard ASA Monitors', value: 'All Standard ASA Monitors', subcategory: [] },
        { label: 'Not Standard ASA Monitors', value: 'Not Standard ASA Monitors', subcategory: [{ label: 'Pulse oximeter', value: 'Pulse oximeter' }, { label: 'Electrocardiography', value: 'Electrocardiography' }, { label: 'Noninvasive blood pressure', value: 'Noninvasive blood pressure' }, { label: 'Temperature monitor', value: 'Temperature monitor' }, { label: 'Inspired and expired gas monitoring', value: 'Inspired and expired gas monitoring' }, { label: 'Peripheral nerve stimulator for NMB monitoring', value: 'Peripheral nerve stimulator for NMB monitoring' }, { label: 'Airway pressure', value: 'Airway pressure' }] }
    ])

    const [nonStandardASAMonitors, setnonStandardASAMonitors] = useState([])
    const [category, setCategory] = useState("")

    const [isData, setisData] = useState([])
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const handleChange = (value, label) => {
        setCategory(label)
        // category.push(label)
        console.log(value);
        setisData(value)
    }

    console.log(nonStandardASAMonitors);

    const [nonStandardASAMonitorsArray, setnonStandardASAMonitorsArray] = useState([])


    const handleClick = () => {
        console.log(nonStandardASAMonitorsArray);

        var token = localStorage.getItem("token")
        try {
            fetch(API_ROOT + `save-as-monitorings?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    case_id: "28",
                    monitoring_type: category,
                    monitoring_sub_type: nonStandardASAMonitorsArray
                })
            })
                .then(response => response.json())
                .then(res => {
                    alert(res.message)
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    const setValues = (name) => {
        setnonStandardASAMonitors(name)
        if (nonStandardASAMonitorsArray.length > 0) {
            nonStandardASAMonitorsArray.pop()
        }
        nonStandardASAMonitorsArray.push(name)
    }
    return (
        <div>
           
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><i className="fa fa-chevron-left"></i></Link>MONITORING
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container">
            <div className="box-1 mt-3 btn-group">
                {
                    monitoring.map((data) => {
                        if (category === (data.label)) {
                            return (
                                <>
                                    <div className="btn selected-category" >
                                        <h5 onClick={() => handleChange(data.subcategory, data.label)} style={{ cursor: "pointer" }}>{data.label}</h5>
                                    </div>
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <div className=" btn category" >
                                        <h5 onClick={() => handleChange(data.subcategory, data.label)} style={{ cursor: "pointer" }}>{data.label}</h5>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
            <div>
                {
                    isData.length ?
                        <div className="sub-mon btn-group">
                            {
                                isData.map((data1) => {

                                    if (nonStandardASAMonitors === (data1.label)) {
                                        return (
                                            <div onClick={() => setValues(data1.label)} className="btn selected-button"  >
                                                <p>{data1.label}</p>
                                            </div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => setValues(data1.label)} className="btn button"  >
                                                <p>{data1.label}</p>
                                            </div>
                                        )
                                    }
                                }

                                )
                            }
                        </div>
                        :
                        <></>

                }
            </div>
            <div className="btn-btn">
                <a onClick={handleClick} className="save-button-container risk-btn">Submit</a>
            </div>
        </div>
        </div>
    )
}

export default Monitoring
