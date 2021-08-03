import React, { useState } from 'react'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'

const Positioning = (props) => {
    const [category, setCategory] = useState(null)

    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const POSITIONING = [
        { value: 'Supine', label: 'Supine' },
        { value: 'Prone', label: 'Prone' },
        { value: 'Beach chair', label: 'Beach chair' },
        { value: 'Lateral', label: 'Lateral' },
        { value: 'Lithotomy', label: 'Lithotomy' }
    ]

    const handleApiCall = () => {
        var token = localStorage.getItem("token")
        console.log(category);
        try {
            fetch(API_ROOT + `save-as-positionings?token=${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    case_id: "28",
                    positioning_type: category
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
    return (
        <div>
           
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><i className="fa fa-chevron-left"></i></Link>POSITIONING
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container">
            <div className="monitoring-div mt-3">
                <div className="box-1 btn-group">
                    {
                        POSITIONING.map((data) => {
                            if (category === data.label) {
                                return (
                                    <div onClick={() => setCategory(data.label)} className="btn selected-category" >
                                        <h5 style={{ cursor: "pointer" }}>{data.label}</h5>
                                    </div>
                                )
                            } else {
                                return (
                                    <div onClick={() => setCategory(data.label)} className="btn category" >
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

export default Positioning
