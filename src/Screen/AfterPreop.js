import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Header from '../CustomComponent/Header'
import "../css/afterPreop.css"
import axios from 'axios'
import { API_ROOT } from '../constants'

const AfterPreop = (props) => {

    const [subCategory, setsubCategory] = useState([])
    const [selectedSubCategory, setselectedSubCategory] = useState([])


    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const allActionLibraryData = useSelector(state => state.actionSummary.allActionLibraryData);
    console.log(allActionLibraryData);


    useEffect(() => {
        allActionLibraryData.map((data) => {
            console.log(data);
            data.data.map((data1) => {
                if (data.name === "Drugs") {
                    if ("ANTIBIOTICS" === data1.drug_name) {
                        data1.sub_type.forEach(res => {
                            (res.label = res.drug_name);
                            (res.value = res.drug_name.toLowerCase());
                        });
                        console.log(data1.sub_type);
                        setsubCategory(data1.sub_type)
                    }
                }
            })
        }
        )

        callApi()

    })

    const callApi = async () => {

        var token = await localStorage.getItem("token")
        const body = {
            "drug_class": "Analgesics"
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

    const handleChangeAnesethesiaType = (selectedOption) => {
        setselectedSubCategory(selectedOption)
    }

    console.log(subCategory);

    return (
        <div>
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>ANALGESIA</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>ANALGESIA
                <h4 className="hidn">CRISES</h4>
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
                                    <div className="afterPreopDiv" onClick={() => props.history.push({
                                        pathname: '/resultOfAction',
                                        state: {
                                            subName: "ANALGESIA",
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
    )
}

export default AfterPreop
