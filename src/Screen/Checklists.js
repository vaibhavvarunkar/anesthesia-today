import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../CustomComponent/Header'
import { API_ROOT } from '../constants'
import "../css/Checklists.css"
import Spinner from "../CustomComponent/Spinner"

const Checklists = (props) => {
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    useEffect(() => {
        getActionLibrary()
    }, [])

    const [actionLibraryData, setactionLibraryData] = useState([])
    const [loading, setLoading] = useState(false)

    const getActionLibrary = () => {
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
                    console.log(res.data.drugs)

                    const obj = [
                        {
                            name: "Checklists",
                            displayName: "CHECKLISTS",
                            data: res.data.checklists
                        }
                    ]
                    console.log(obj)

                    setactionLibraryData(obj)
                    setLoading(true)
                }

            })
    }

    var dataPass = []
    const handleChange = (name) => {
        console.log(name);
        dataPass.push(name)
    }

    const callApi = () => {
        var token = localStorage.getItem("token")
        console.log(dataPass);
        fetch(API_ROOT + `save-as-checklists?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "30",
                "regional_yes_table": dataPass,
                "surgical_yes_table": ["test2", "test3"],
                "surgical_no_table": ["test2", "test3"],
                "regional_no_table": ["test2", "test3"]

            })
        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    alert(res.message)
                }
            })
    }
    return (
        <div>
            {
                loading ?
                    <>

                        {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
                        {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>CHECKLISTS</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
                        <div className="backNavigation text-center">
                            <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>CHECKLISTS
                            <h4 className="hidn">CRISES</h4>
                        </div>
                        <div>
                            {
                                actionLibraryData.map((data) => {
                                    return (
                                        <>
                                            {
                                                data.data.map((data1) => {
                                                    return (
                                                        <div className="w-100" style={{ margin: '0 auto' }}>
                                                            <div className="container w-50 mt-2">
                                                                <h5>{data1.name}</h5>
                                                                {
                                                                    data1.checklist_sub_type.map((data2) => {
                                                                        return (
                                                                            <div className="checklists-div">
                                                                                <p><input onChange={() => handleChange(data2.name)} style={{ marginRight: 10 }} type="checkbox"></input>{data2.name}</p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="btn-btn">
                            <a onClick={() => callApi()} className="risk-btn">Submit</a>
                        </div>
                    </>
                    :
                    <Spinner />

            }
        </div>
    )
}

export default Checklists
