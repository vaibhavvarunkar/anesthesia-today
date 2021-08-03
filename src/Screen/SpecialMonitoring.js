import React, { useState } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'

const SpecialMonitoring = (props) => {
    const [category, setCategory] = useState([])

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const specializedMonitoring = [
        { value: 'CSF Drain', label: 'CSF Drain' },
        { value: 'TEE', label: 'TEE' },
        { value: 'Neuromonitoring', label: 'Neuromonitoring' }

    ]

    const [categoryArray, setcategoryArray] = useState([])

    const handleApiCall = () => {
        console.log((categoryArray));
        var token = localStorage.getItem("token")
        try {
            fetch(API_ROOT + `save-as-specialized-monitorings?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    case_id: "28",
                    specialized_monitoring_type: categoryArray
                })
            })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    alert(res.message);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    const setValues = (name) => {
        setCategory(name)
        if (categoryArray.length > 0) {
            categoryArray.pop()
        }
        categoryArray.push(name)
    }
    return (
        <div>
           
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><i className="fa fa-chevron-left"></i></Link>SPECIAL MONITORING
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container">
            <div className="monitoring-div mt-3">
                <div className="box-1 btn-group">
                    {
                        specializedMonitoring.map((data) => {
                            if (data.label === category) {
                                return (
                                    <div onClick={() => setValues(data.label)} className="btn selected-category" >
                                        <h5 style={{ cursor: "pointer" }}>{data.label}</h5>
                                    </div>
                                )
                            } else {
                                return (
                                    <div onClick={() => setValues(data.label)} className="btn category" >
                                        <h5 style={{ cursor: "pointer" }}>{data.label}</h5>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="btn-btn">
                <a onClick={handleApiCall} className="save-button-container risk-btn">Submit</a>
            </div>
        </div>
        </div>
    )
}

export default SpecialMonitoring
