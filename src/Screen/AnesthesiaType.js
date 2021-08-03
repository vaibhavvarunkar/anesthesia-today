import React, { useState } from 'react'
import '../css/AnesthesiaType.css'
import Select from "react-select";
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom';
const AnesthesaiSelectedData = [
    { name: 'Regional Anesthesia', subcategory: [{ name: 'SPECIFIC BLOCKS', subcategory: [{ name: 'NECK', subcategory: [{ name: 'Cervical Plexus Block' }] }] }] }
]
const questionOption = [
    { label: 'Single shot', value: 'Single shot' },
    { label: 'Continuous', value: 'Continuous' }
]

const Neuraxial_Blockade_Site = [
    { label: 'Cervical', value: 'Cervical', subcategory: [{ label: 'C1-C2', value: 'C1-C2' }, { label: 'C2-C3', value: 'C2-C3' }, { label: 'C2-C3', value: 'C2-C3' }, { label: 'C3-C4', value: 'C3-C4' }, { label: 'C4-C5', value: 'C4-C5' }, { label: 'C5-C6', value: 'C5-C6' }, { label: 'C6-C7', value: 'C6-C7' }, { value: 'C7-T1', label: 'C7-T1' }] },
    { label: 'Thoracic', value: 'Thoracic', subcategory: [{ label: 'C7-T1', value: 'C7-T1' }, { label: 'T1-T2', value: 'T1-T2' }, { label: 'T2-T3', value: 'T2-T3' }, { label: 'T3-T4', value: 'T3-T4' }, { label: 'T4-T5', value: 'T4-T5' }, { label: 'T5-T6', value: 'T5-T6' }, { label: 'T6-T7', value: 'T6-T7' }, { value: 'T7-T8', label: 'T7-T8' }, { label: 'T8-T9', value: 'T8-T9' }, { label: 'T9-T10', value: 'T9-T10' }, { label: 'T10-T11', value: 'T10-T11' }, { label: 'T11-T12', value: 'T11-T12' }, { label: 'T12-L1', value: 'T12-L1' }] },
    { label: 'Lumbar', value: 'Lumbar', subcategory: [{ label: 'T12-L1', value: 'T12-L1' }, { label: 'L1-L2', value: 'L1-L2' }, { label: 'L2-L3', value: 'L2-L3' }, { label: 'L3-L4', value: 'L3-L4' }, { label: 'L4-L5', value: 'L4-L5' }, { label: 'L5-S1', value: 'L5-S1' }] },
    { label: 'Sacral', value: 'Sacral', subcategory: [{ label: 'L5-S1', value: 'L5-S1' }, { label: 'S1-S2', value: 'S1-S2' }, { label: 'S2-S3', value: 'S2-S3' }, { label: 'S3-S4', value: 'S3-S4' }, { label: 'S4-S5', value: 'S4-S5' }] },

]

const AnesthesiaType = (props) => {
    const [displayQuestion, setdisplayQuestion] = useState(false)
    const [saveDropdownValue, setsaveDropdownValue] = useState([])
    ////////////dropdown states///////
    const [category, setCategory] = useState(null)
    const [subcategory, setSubCategory] = useState(null)
    const [subList, setSubList] = useState([])
    const displayQuestionsforanesthesiatype = () => {
        setdisplayQuestion(!displayQuestion)
    }
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const handleChangeSingleShotOrContinuos = selectedOption => {
        setsaveDropdownValue(selectedOption)

    }

    ////////dropdown set/////
    const handleChangeCategory = (e) => {
        setCategory(e)
        setSubCategory(null)
        setSubList(e.subcategory)
    }

    const handleChangeSubCategory = (e) => {
        setSubCategory(e)
    }





    return (
        <div  >
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>ANESTHESIA TYPE</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
            <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link> ANESTHESIA TYPE
            <h4 className="hidn">CRISES</h4>
            </div>

            {
                AnesthesaiSelectedData.map((data) => {
                    return (
                        <div className="main-container mt-3">
                            {/* <div className="AnesthesiaType-list-container" >
                                <div className="circle" >
                                </div>

                                <div style={{ marginLeft: 10 }} >{data.name}</div>
                            </div> */}
                            <ul className="AnesthesiaType-list-container">
                                <li><span className="check fa fa-check-circle "></span> {data.name}
                                <ul>
                                   
                            {
                                data.subcategory.map((data1) => {
                                    return (
                                        // <div>

                                        //     <div style={{ marginLeft: 20 }} className="AnesthesiaType-list-container" >
                                        //         <div className="circle" >
                                        //         </div>

                                        //         <div style={{ marginLeft: 10 }} >{data1.name}</div>
                                        //     </div>
                                        <li><span className="check fa fa-check-circle "></span>{data1.name}
                                        <ul>
                                            {
                                                data1.subcategory.map((data3) => {
                                                    return (
                                                        // <div>
                                                        //     <div style={{ marginLeft: 40 }} className="AnesthesiaType-list-container" >
                                                        //         <div className="circle" >
                                                        //         </div>

                                                        //         <div style={{ marginLeft: 10 }} >{data3.name}</div>
                                                        //     </div>
                                                        <li><span className="check fa fa-check-circle "></span>{data3.name}
                                                        <ul>

                                                            {
                                                                data3.subcategory.map((data4) => {

                                                                    return (
                                                                        // <div onClick={() => displayQuestionsforanesthesiatype()} style={{ marginLeft: 60, cursor: 'pointer' }} className="AnesthesiaType-list-container" >
                                                                        //     <div className="circle" style={{ marginLeft: 100 }} >
                                                                        //     </div>

                                                                        //     <div style={{ marginLeft: 10 }} >{data4.name}</div>
                                                                        // </div>
                                                                        <li onClick={() => displayQuestionsforanesthesiatype()}><span className="check fa fa-check-circle "></span>{data4.name}</li>

                                                                    )
                                                                })
                                                            }
                                                            </ul>
                                                            </li>
                                                      
                                                    )
                                                })
                                            }
                                            </ul>
                                            {
                                                displayQuestion ?
                                                    <div className="AnesthesiaType-question-container" >
                                                        <div className="single-shot-or-continous-container btn-group mb-2" >
                                                            {
                                                                questionOption.map((data) => {
                                                                    if (data.label === saveDropdownValue.label) {
                                                                        return (
                                                                            <button onClick={() => handleChangeSingleShotOrContinuos(data)} className="btn single-shot-or-continous-selected-type-button" >{data.label}</button>
                                                                        )
                                                                    } else {
                                                                        return (
                                                                            <button onClick={() => handleChangeSingleShotOrContinuos(data)} className="btn single-shot-or-continous-type-button" >{data.label}</button>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                        <div className="sub-question-container" onClick={() => props.history.push("/newAfterLamax")} >LA MAX Calculator</div>
                                                        <div className="sub-question-container">Local Anesthatic Medications</div>
                                                        <div className="sub-question-container">Adjunct Medications</div>
                                                        <div className="sub-question-container">Other</div>
                                                        <div className="sub-question-container"><a style={{ marginLeft: 30 }} target="_blank" href="http://usra.ca/regional-anesthesia/specific-blocks/home.php" >Refernce</a></div>
                                                        <div className="sub-question-container">Neuraxial Blockade Site</div>
                                                        <div className="sub-question-container">
                                                           <div className="w-50 mt-2 mb-2">
                                                               <Select
                                                                style={{ width: 200 }}
                                                                placeholder="Select Category"
                                                                value={category}
                                                                options={Neuraxial_Blockade_Site}
                                                                onChange={handleChangeCategory}
                                                                getOptionLabel={x => x.label}
                                                                getOptionValue={x => x.value}
                                                            />
                                                            </div>
                                                            <div className="w-50 mt-2 mb-2 pl-2">
                                                            <Select
                                                                placeholder="Select Subcategory"
                                                                value={subcategory}
                                                                options={subList}
                                                                onChange={handleChangeSubCategory}
                                                                getOptionLabel={x => x.label}
                                                                getOptionValue={x => x.value}
                                                            />
                                                            </div>
                                                        </div>
                                                        <div className="sub-question-container">Local Anesthatic Medications</div>
                                                        <div className="sub-question-container">Adjunct Medications</div>
                                                        <div className="sub-question-container">
                                                            <label>Depth Of Loss</label>
                                                            <input style={{ display: 'block' }} placeholder="Enter min tidal volume" className="ant-text-input"></input>
                                                        </div>
                                                        <div className="sub-question-container">
                                                            <label>Depth Of Catheter</label>
                                                            <input style={{ display: 'block' }} placeholder="Enter min tidal volume" className="ant-text-input"></input>
                                                        </div>
                                                        <div className="sub-question-container">Other</div>
                                                    </div>

                                                    : <></>
                                            }

                                        </li>
                                       
                                    )
                                })
                            } </ul>
                            </li>
                        </ul>
</div>
                    )
                })
            }
        </div>
    )
}

export default AnesthesiaType