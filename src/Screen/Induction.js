import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { API_ROOT } from '../constants'
import Axios from "axios"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Select from 'react-select';
import axios from 'axios'

const Induction = (props) => {
    const allActionLibraryData = useSelector(state => state.actionSummary.allActionLibraryData);
    const [subCategory, setsubCategory] = useState([])
    const [selectedSubCategory, setselectedSubCategory] = useState([])

    const [inductionArray, setinductionArray] = useState([
        {
            id: 1,
            name: 'ANESTHESIA'
        },
        {
            id: 2,
            name: 'ANALGESIA'
        },
        {
            id: 3,
            name: 'BLOOD PRESSURE'
        },
        {
            id: 4,
            name: 'PARALYTICS'
        },

    ])
    const [value, setValue] = useState(null)

    useEffect(() => {
        if (props.location.state !== undefined) {
            addnewData()
        }

    }, [inductionArray])


    const refresh = () => {
        setValue({});
    }

    const addnewData = () => {
        console.log(props.location.state.actionSummaryType, props.location.state.categorySelected)
        if (props.location.state.actionSummaryType === "induction") {
            if (props.location.state.categorySelected === "Crises") {
                props.location.state.actionSummary.map((data) => {
                    let obj = {
                        id: '',
                        name: ''
                    }
                    obj.id = inductionArray.length + 1
                    obj.name = data.name
                    inductionArray.push(obj)
                })
                refresh()
            }
        }
    }


    const saveInductionData = async () => {
        try {
            const token = await localStorage.getItem('token')
            const url = API_ROOT + `save-inductions?token=${token}`
            const body = {
                "case_id": "270",
                "drug_name": "test drug11",
                "drug_id": "11",
                "age": "11",
                "weight": "222",
                "height": "222",
                "patient_type": "testing ",
                "suggested_bolus_dose": "test output",
                "suggested_infusion_dose": "test output",
                "suggested_administration_route": "test output",
                "suggested_administration_notes": "test output",
                "personal_bolus_dose": "test output",
                "personal_infusion_dose": "test output",
                "personal_administration_route": "test output",
                "personal_administration_notes": "test output"

            }


            const res = await Axios.post(url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data)

        } catch (error) {
            console.log(error)
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

            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>INDUCTION</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>INDUCTION
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    {
                        inductionArray.map((data) => {
                            return (
                                <div className="risk-ev" style={{ cursor: 'pointer' }} onClick={() => getDataOfDrug("ANTIBIOTICS")} >
                                    <h4 onClick={() => hitApi(data.name)}>{data.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
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
                    <h4> <OtherBtn /></h4>
                </div>

                {/* <div className="risk-evalution-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=induction')} >
                    Add
                </div> */}
                <div className="btn-btn">
                    <a className="risk-btn" style={{ backgroundColor: "violet" }}><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>ADD</a>
                </div>


            </div>

            <div className="btn-btn">
                <a className="risk-btn" onClick={() => saveInductionData()}>Submit</a>
            </div>

        </div>
    )
}

export default Induction