import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/RiskEvalution.css'
import OtherBtn from './OtherBtn'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import { useSelector } from 'react-redux'
import Select from 'react-select';
import axios from 'axios'

const Emergence = (props) => {
    const allActionLibraryData = useSelector(state => state.actionSummary.allActionLibraryData);
    const [subCategory, setsubCategory] = useState([])
    const [selectedSubCategory, setselectedSubCategory] = useState([])

    const [emergenceArray, setemergenceArray] = useState([
        {
            id: 1,
            name: 'AIRWAY'
        },
        {
            id: 2,
            name: 'ANALGESIA'
        },
        {
            id: 3,
            name: 'REVERSAL'
        },
        {
            id: 4,
            name: 'ANTIEMETICS'
        },


    ])
    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }





    const navigateToRiskEvalutionType = async (value) => {
        if (value === "AIRWAY") {
            props.history.push('/emergenceairway')
        } else {
            allActionLibraryData.map((data) => {
                data.data.map((data1) => {
                    if (data.name === "Drugs") {

                        if (value === data1.drug_name) {
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
        if (value !== null) {
            var token = await localStorage.getItem("token")
            const body = {
                "drug_class": value
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

    const intraopEmergenceApi = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-as-intratop-emergency-drugs?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "30",
                "title": " drug",
                "drug_parent": "11",
                "drug_parent_id": "11",
                "drug_name": "abc",
                "drug_id": "222",
                "age": "222",
                "weight": "222",
                "patient_type": "testing ",
                "personal_bolus_dose": "test output",
                "personal_infusion_dose": "test output",
                "personal_administration_route": "test output",
                "personal_administration_notes": "test output"

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

    const handleChangeAnesethesiaType = (selectedOption) => {
        setselectedSubCategory(selectedOption)
    }


    return (
        <div>

            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>EMERGENCE</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>EMERGENCE
                <h4 className="hidn">CRISES</h4>
            </div>
            <div className="risk-evalution-main-container" >
                <div className="risk-evalution-list-container" >
                    {
                        emergenceArray.map((data) => {
                            return (
                                <div className="risk-ev" style={{ cursor: 'pointer' }}  >
                                    <h4 onClick={() => navigateToRiskEvalutionType(data.name)}>{data.name}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <OtherBtn />
                <div className="favourite-add-more-btn" onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')} >
                    Add
                </div> */}

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




            </div>
            <div className="risk-ev">
                <h4><OtherBtn /></h4>
            </div>
            <div className="btn-btn"  >
                <a className="risk-btn" style={{ backgroundColor: "violet" }} onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')}><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>Add</a>
            </div>
            <div className="btn-btn" onClick={() => intraopEmergenceApi()} >
                <a className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default Emergence