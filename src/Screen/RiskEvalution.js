import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import { API_ROOT } from '../constants'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../CustomComponent/Spinner'


const RiskEvalution = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {

    }, [data])
    const getData = async () => {
        var token = localStorage.getItem("token")
        var url = API_ROOT + `all-risk-scores-names?token=${token}`
        const res = await axios.get(url)
        setData(res.data.data)
        console.log(res.data.data);
        setLoading(true)
    }

    const forwardData = (id) => {
        props.history.push({
            pathname: "/rcri",
            state: id
        })
    }
    return (
        <div>
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link> RISK EVALUATION
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container risk-eval-content mt-3">
                <div className="row">
                    <div className="main-risk col-md-4">
                        {loading ?
                            data.length ?
                                data.map((info) => {
                                    return (
                                        <>
                                            <div className="risk-ev btn-group-horizontal">
                                                <button className="btn drawer-button" onClick={() => forwardData(info.id)}>{info.name}</button>
                                            </div>

                                        </>
                                    )
                                })

                                :
                                <></>
                            :
                            <Spinner />
                        }
                        <div className="btn-btn">
                            <a className="risk-btn save-button-container"><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>Add</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
    )
}

export default RiskEvalution
