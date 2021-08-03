import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Select from 'react-select';
import Spinner from '../CustomComponent/Spinner'
import axios from 'axios'
import { API_ROOT } from '../constants'

const Premedication = (props) => {
    const allActionLibraryData = useSelector(state => state.actionSummary.allActionLibraryData);
    console.log(allActionLibraryData);
    const [subCategory, setsubCategory] = useState([])
    const [selectedSubCategory, setselectedSubCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const [premedicationArray, setpremedicationArray] = useState([
        {
            id: 1,
            name: 'ANALGESIA'
        },
        {
            id: 2,
            name: 'ANTIEMETIC'
        },
        {
            id: 3,
            name: 'ANXIOLYSIS'
        },
    ])
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (props.location.state !== undefined) {
            addnewData()
        }

    }, [premedicationArray])


    const refresh = () => {
        // it re-renders the component
        setValue({});
    }

    const addnewData = () => {
        console.log(props.location.state.actionSummaryType, props.location.state.categorySelected)
        if (props.location.state.actionSummaryType === "premedication") {
            if (props.location.state.categorySelected === "Crises") {
                props.location.state.actionSummary.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = premedicationArray.length + 1
                    obj.name = data.name
                    premedicationArray.push(obj)
                    setLoading(true)
                })
                refresh()
            }
        }

    }

    const navigateToRiskEvalutionType = (value) => {
        if (value === "RCRI") {
            props.history.push('/rcri')
        }
    }

    const getDataOfDrug = (name) => {
        allActionLibraryData.map((data) => {
            data.data.map((data1) => {
                if (data.name === "Drugs") {

                    if (name === data1.drug_name) {
                        data1.sub_type.forEach(res => {
                            (res.label = res.drug_name);
                            (res.value = res.drug_name.toLowerCase());
                        });

                        setsubCategory(data1.sub_type)

                    }
                }
            })
        })
    }

    const handleChangeAnesethesiaType = (selectedOption) => {
        setselectedSubCategory(selectedOption)
    }

    const hitApi = async (name) => {
        console.log(name);
        if (name !== null) {
            var token = await localStorage.getItem("token")
            const body = {
                "drug_class": name
            }
            const res = await axios.post(API_ROOT + `drug-name-for-class?token=${token}`, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res)
            if (res.data.status === "true") {
                alert(res.data.message)
            }
        }
    }

    return (
        <div>

            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>PREMEDICATION</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link> PREMEDICATION
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="risk-evalution-main-container" >
                <>
                    <div className="risk-evalution-list-container" >
                        <div className="row">
                            <div className="col-md-3"> </div>
                            <div className="col-md-6">
                                {
                                    premedicationArray.map((data) => {
                                        return (
                                            <div className="risk-ev" style={{ cursor: 'pointer' }} onClick={() => getDataOfDrug("ANTIBIOTICS")} >
                                                <h4 onClick={() => hitApi(data.name)} style={{ fontSize: 20 }}>{data.name}</h4>
                                            </div>
                                        )
                                    })
                                }
                                {subCategory.length ?
                                    <div className='ANESTHESIA-type-input-container'>
                                        <Select
                                            isMulti={true}
                                            value={selectedSubCategory}
                                            onChange={(value) => handleChangeAnesethesiaType(value)}
                                            placeholder='Anesthesia Type'
                                            className='ANESTHESIA-type-dropdown'
                                            id='patien-type'
                                            options={subCategory}
                                        />
                                    </div> : <></>
                                }
                                {
                                    selectedSubCategory.length ?
                                        <>
                                            {
                                                selectedSubCategory.map((data) => {
                                                    return (
                                                        <div onClick={() => props.history.push({
                                                            pathname: '/resultOfAction',
                                                            state: {
                                                                subName: data.label,
                                                            }
                                                        })} >
                                                            {data.label}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </> : <></>
                                }

                                <div className="risk-ev">
                                    <h4><OtherBtn /></h4>
                                </div>

                            </div>
                            <div className="col-md-3"> </div>
                        </div>
                    </div>

                    <div className="risk-evalution-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=premedication')} >
                        <div className="btn-div">
                            <a style={{ backgroundColor: "orange" }}><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>Add</a>
                        </div>
                    </div>

                </>

            </div>

        </div>
    )
}

export default Premedication