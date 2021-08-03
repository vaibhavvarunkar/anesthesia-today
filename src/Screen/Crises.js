import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import { API_ROOT } from '../constants'
import "../css/crises.css"
import { Link } from 'react-router-dom'
import Spinner from '../CustomComponent/Spinner';



const Crises = (props) => {
    const [actionLibraryData, setactionLibraryData] = useState([])
    const [subname, setSubname] = useState("")
    const [fileName, setFileName] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `action-library-data?token=${token}`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                if (res.status === "true") {
                    res.data.drugs.forEach(element => {
                        element.name = element.drug_name;
                    });
                    // console.log(res.data.drugs)

                    const obj = [{
                        name: "Crises",
                        displayName: "CRISES",
                        data: res.data.crises
                    }]
                    console.log(obj)

                    setactionLibraryData(obj);
                    setLoading(true);
                }
            })
    }, [])

    return (
        <div>
           
            <div className="backNavigation text-center">
                <Link className="arrow" to="/favourite"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Favourite</span></span></Link>CRISES
                <span style={{ position: "absolute", right: "25%" }}>
                    CASENAME:{fileName === null ? '-' : fileName}
                </span>
                <h4 className="hidn">CRISES</h4>
            </div>
            {loading ?
                (actionLibraryData).map((data) => {
                    return (
                        <>
                            {data.data.map((data1, index) => {
                                return (
                                    <>
                                        <div className="main-container">
                                            <div className="question-header">
                                                {/* <Link className="crisess-name">{index + 1}</Link>
                                                <Link className="names">{data1.name}</Link> */}
                                                <div className="pl-3">{index + 1}. {data1.name}</div>
                                                </div>
                                                <div>
                                                {
                                                    data1.crises_sub_type.map((name) => {
                                                        return (
                                                            <div className="sub-question-sub-container">
                                                                <div className="sub-question-container" onClick={() => {
                                                                    props.history.push({
                                                                        pathname: '/crisessubtype',
                                                                        state: { name: name.name }
                                                                    });
                                                                }}>{name.name}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                           
                                        </div>

                                    </>
                                )
                            })}
                        </>
                    )
                }):<Spinner/>
            }
            
        </div>
    )
}

export default Crises
