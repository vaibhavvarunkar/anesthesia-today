import React, { useState } from 'react'
import '../css/Aiway.css'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAirwayAdjunct3, setAirwayAdjunctType3, setAirwayCalc3, setAirwayNotes3, setAirwayOther3, setIntubation3, setLaryngoscopeMain3, setLaryngoscopeSubSubType3, setLaryngoscopeSubType3, setLma3, setLungIntubation3, setLungSubIntubation3, setLungSubSubIntubation3, setMask3, setSubIntubation3 } from '../redux/EmergencyAIrwayActions'
import Axios from 'axios'
import { API_ROOT } from '../constants'

const EmergenceAirway = (props) => {
    const [Intubation_Standard_Selected, setIntubation_Standard_Selected] = useState([])

    const [Intubation_Standard_type, setIntubation_Standard_type] = useState([])
    const [Intubation_One_lung, setIntubation_One_lung] = useState([])
    const [Intubation_One_lung_type, setIntubation_One_lung_type] = useState([])
    const [Laryngoscope, setLaryngoscope] = useState([])
    const [Laryngoscope_type, setLaryngoscope_type] = useState([])
    const [Airway_Adjuncts_type, setAirway_Adjuncts_type] = useState([])
    const [selected_mask, set_selected_mask] = useState([])
    const [selected_LMA, set_selected_LMA] = useState([])
    const [aiwayCalculatorSelected, setaiwayCalculatorSelected] = useState([])
    const optionformask = [
        { value: 'Bubble gum', label: 'Bubble gum' },
        { value: 'Child/Bubble gum', label: 'Child/Bubble gum' },
        { value: 'Neonate', label: 'Neonate' },
        { value: 'Infant', label: 'Infant' },
        { value: 'Toddler', label: 'Toddler' },
        { value: 'small adult', label: 'small adult' },
        { value: 'med/large adult', label: 'med/large adult' },
        { value: 'large adult', label: 'large adult' },

    ]
    const optionforLMA = [
        { value: '1', label: '1' },
        { value: '1.5', label: '1.5' },
        { value: '2', label: '2' },
        { value: '2.5', label: '2.5' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },

    ]

    const optionforIntubation_Standard = [
        { label: 'Location', value: 'Location', subcategory: [{ label: 'Oral', value: 'Oral' }, { label: 'Nasal', value: 'Nasal' }] },
        { label: 'ET Tube Uncuffed', value: 'ET Tube Uncuffed', subcategory: [{ label: '2.5', value: '2.5' }, { label: '3', value: '3' }, { label: '3.5', value: '3.5' }, { label: '4', value: '4' }, { label: '4.5', value: '4.5' }, { label: '5', value: '5' }, { label: '5.5', value: '5.5' }] },
        { label: 'ET Tube Cuffed', value: 'ET Tube Cuffed', subcategory: [{ label: '2.5', value: '2.5' }, { label: '3', value: '3' }, { label: '3.5', value: '3.5' }, { label: '4', value: '4' }, { label: '4.5', value: '4.5' }, { label: '5', value: '5' }, { label: '5.5', value: '5.5' }, { label: '6', value: '6' }, { label: '6.5', value: '6.5' }, { label: '7', value: '7' }, { label: '7.5', value: '7.5' }, { label: '8', value: '8' }] }

    ]

    const optionforIntubation_One_lung = [
        { label: 'Double lumen ETT', value: 'Double lumen ETT', subcategory: [{ label: '26', value: '26' }, { label: '28', value: '28' }, { label: '30', value: '30' }, { label: '32', value: '32' }, { label: '35', value: '35' }, { label: '37', value: '37' }, { label: '39', value: '39' }, { label: '41', value: '41' }] },
        { label: 'Bronchial blocker', value: 'Bronchial blocker', subcategory: [{ label: 'Select ETT Size', value: 'Select ETT Size', subcategory: [{ label: '2.5', value: '2.5' }, { label: '3', value: '3' }, { label: '3.5', value: '3.5' }, { label: '4', value: '4' }, { label: '4.5', value: '4.5' }, { label: '5', value: '5' }, { label: '5.5', value: '5.5' }, { label: '6', value: '6' }, { label: '6.5', value: '6.5' }, { label: '7', value: '7' }, { label: '7.5', value: '7.5' }, { label: '8', value: '8' }] }] },
        { label: 'Univent', value: 'Univent', subcategory: [{ label: 'Select ETT Size', value: 'Select ETT Size', subcategory: [{ label: '2.5', value: '2.5' }, { label: '3', value: '3' }, { label: '3.5', value: '3.5' }, { label: '4', value: '4' }, { label: '4.5', value: '4.5' }, { label: '5', value: '5' }, { label: '5.5', value: '5.5' }, { label: '6', value: '6' }, { label: '6.5', value: '6.5' }, { label: '7', value: '7' }, { label: '7.5', value: '7.5' }, { label: '8', value: '8' }] }] },

    ]

    const optionforLaryngoscope = [
        { label: 'Direct Laryngoscope', value: 'Direct Laryngoscope', subcategory: [{ label: 'Miller', value: 'Miller', subcategory: [{ label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] }, { label: 'MAC', value: 'MAC', subcategory: [{ label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] }, { label: 'WIS', value: 'WIS', subcategory: [{ label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] }] },
        { label: 'Indirect Laryngoscope', value: 'Indirect Laryngoscope', subcategory: [{ label: 'Glidescope', value: 'Glidescope', subcategory: [{ label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] }, { label: 'C-MAC', value: 'C-MAC', subcategory: [{ label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] }] },

    ]
    const optionforAirway_Adjuncts = [
        { label: 'Oral Airway', value: 'Oral Airway', subcategory: [{ label: '30', value: '30' }, { label: '40', value: '40' }, { label: '50', value: '50' }, { label: '60', value: '60' }, { label: '70', value: '70' }, { label: '80', value: '80' }, { label: '90', value: '90' }] },
        { label: 'Nasal Airway', value: 'Nasal Airway', subcategory: [{ label: '14', value: '14' }, { label: '16', value: '16' }, { label: '18', value: '18' }, { label: '20', value: '20' }, { label: '22', value: '22' }, { label: '24', value: '24' }, { label: '26', value: '26' }, { label: '28', value: '28' }, { label: '30', value: '30' }, { label: '32', value: '32' }, { label: '34', value: '34' }, { label: '36', value: '36' }, { label: '38', value: '38' }, { label: '40', value: '40' }] },
        { label: 'Resuscitation bag', value: 'Resuscitation bag', subcategory: [] },
        { label: 'OTHER', value: 'OTHER', subcategory: [] }

    ]

    const Airawy_calculactor = [
        { label: 'ETT Depth (Adult) and Tidal Volume', value: 'ETT Depth (Adult) and Tidal Volume' },
        { label: 'ETT Depth (Pediatric) - only ETT depth component', value: 'ETT Depth (Pediatric) - only ETT depth component' }
    ]


    const optionforOther = [
        { label: 'Jet ventilation', value: 'Jet ventilation' },
        { label: 'Mask', value: 'Mask' },
        { label: 'OTHER', value: 'OTHER' }
    ]



    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    const handleChangeMask = selectedOption => {
        set_selected_mask(selectedOption)
    }

    const handleChangeLMA = selectedOption => {
        set_selected_LMA(selectedOption)
    }

    const handleChangeIntubation_Standard = selectedOption => {
        setIntubation_Standard_Selected(selectedOption)
        setIntubation_Standard_type(selectedOption.subcategory)
        dispatch(setIntubation3(selectedOption))
    }
    const handleChangeIntubation_One_lung = selectedOption => {
        setIntubation_One_lung(selectedOption.subcategory)
        dispatch(setLungIntubation3(selectedOption))
    }

    const handleChangeIntubation_One_lung_type = selectedOption => {
        console.log(selectedOption)
        setIntubation_One_lung_type(selectedOption.subcategory)
        dispatch(setLungSubIntubation3(selectedOption))
        if (lungIntubation3.label === "Double lumen ETT")
            hitLungIntubation1(selectedOption.value)
    }

    const handleChangeLaryngoscope = selectedOption => {
        setLaryngoscope(selectedOption.subcategory)
        dispatch(setLaryngoscopeMain3(selectedOption))
    }
    const handleChangeLaryngoscope_type = selectedOption => {
        setLaryngoscope_type(selectedOption.subcategory)
        dispatch(setLaryngoscopeSubType3(selectedOption))
    }

    const handleChangeAirway_Adjuncts = selectedOption => {
        setAirway_Adjuncts_type(selectedOption.subcategory)
        dispatch(setAirwayAdjunct3(selectedOption))
    }

    const handleChangeAirwayCalculator = selectedOption => {
        setaiwayCalculatorSelected(selectedOption)
    }



    const dispatch = useDispatch()
    const mask3 = useSelector(state => state.AirwayReducer3.mask3)
    const Lma3 = useSelector(state => state.AirwayReducer3.Lma3)
    const intubation3 = useSelector(state => state.AirwayReducer3.intubation3)
    const subIntubation3 = useSelector(state => state.AirwayReducer3.subIntubation3)
    const lungIntubation3 = useSelector(state => state.AirwayReducer3.lungIntubation3)
    const lungSubIntubation3 = useSelector(state => state.AirwayReducer3.lungSubIntubation3)
    const laryngoscopeType3 = useSelector(state => state.AirwayReducer3.laryngoscopeType3)
    const laryngoscopeSubType3 = useSelector(state => state.AirwayReducer3.laryngoscopeSubType3)
    const laryngoscopeSubSubType3 = useSelector(state => state.AirwayReducer3.laryngoscopeSubSubType3)
    const airwayAdjunct3 = useSelector(state => (state.AirwayReducer3.airwayAdjunct3))
    const airwayAdjunctType3 = useSelector(state => (state.AirwayReducer3.airwayAdjunctType3))
    const airwayOther3 = useSelector(state => state.AirwayReducer3.airwayOther3)
    const airwayCalc3 = useSelector(state => state.AirwayReducer3.airwayCalc3)
    const airwayNotes3 = useSelector(state => state.AirwayReducer3.airwayNotes3)
    const lungSubSubIntubation3 = useSelector(state => state.AirwayReducer3.lungSubSubIntubation3)

    const [resp, setResp] = useState([])
    const [show, setshow] = useState(false)
    const [resp2, setResp2] = useState([])
    const [resp3, setResp3] = useState([])
    const [resp4, setResp4] = useState([])
    const [resp5, setResp5] = useState([])
    const [show2, setshow2] = useState(false)
    const [show3, setshow3] = useState(false)
    const [show4, setshow4] = useState(false)
    const [show5, setshow5] = useState(false)

    const saveAirwayData = async () => {
        var token = await localStorage.getItem("token")
        const body = {
            "case_id": "30",
            "type": "intraop",
            "nasal_cannula_with_etco2": "test3",
            "mask": mask3,
            "lma_size": Lma3,
            "lma_size_details": ["test2", "test3"],
            "intubation_standard_location": subIntubation3,
            "intubation_standard_et_tube_uncuffed_size": subIntubation3,
            "intubation_standard_et_tube_uncuffed_details": ["test2", "test3"],
            "intubation_standard_et_tube_cuffed_size": subIntubation3,
            "intubation_standard_et_tube_cuffed_details": ["test2", "test3"],
            "intubation_one_lung_double_lumen_ett_size": lungIntubation3,
            "intubation_one_lung_double_lumen_ett_details": ["test2", "test3"],
            "intubation_one_lung_bronchial_blocker_ett_size": lungSubSubIntubation3,
            "intubation_one_lung_bronchial_blocker_ett_details": ["test2", "test3"],
            "intubation_one_lung_univent_ett_size": lungSubSubIntubation3,
            "intubation_one_lung_univent_ett_details": ["test2", "test3"],
            "laryngoscope_type": laryngoscopeType3,
            "laryngoscope_type_brand_equipment": laryngoscopeSubType3,
            "laryngoscope_type_brand_equipment_size": laryngoscopeSubSubType3,
            "airway_adjuncts_oral_airway_size": airwayAdjunctType3,
            "airway_adjuncts_oral_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_oral_airway_weight_based_recommended_size": "test6",
            "airway_adjuncts_nasal_airway_size": airwayAdjunctType3,
            "airway_adjuncts_nasal_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_resuscitation_bag": "test6",
            "airway_adjuncts_other": "test6",
            "other_airway_management": airwayOther3,
            "airway_notes_images": "test6",
            "airway_notes_text": airwayNotes3,
            "airway_calculator_formula": airwayCalc3,
            "airway_calculator_output": "test6"

        }
        const res = await Axios.post(API_ROOT + `save-as-airways?token=${token}`, body, {
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

    var LmaApi = ''
    var IntubationApi = ""
    var lungIntubationApi1 = ""
    var lungIntubationApi2 = ""
    var lungIntubationApi3 = ""

    const HitLma = async (obj) => {
        dispatch(setLma3(obj))
        LmaApi = obj.value
        var token = await localStorage.getItem("token")
        const body = {
            "lma_size": LmaApi
        }
        const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.data.status === "true") {
            setResp(res.data.data)
            setshow(true)
        }
    }

    const hitIntubation = async (obj) => {
        dispatch(setSubIntubation3(obj))
        IntubationApi = obj.value
        var token = await localStorage.getItem("token")
        if (intubation3.label === "ET Tube Uncuffed") {
            const body = {
                "et_tube_uncuffed": IntubationApi
            }
            const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (res.data.status === "true") {
                console.log(res.data.data);
                setResp2(res.data.data)
                setshow2(true)
            }
        }
        else {
            const body = {
                "et_tube_cuffed": IntubationApi
            }
            const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (res.data.status === "true") {
                setResp2(res.data.data)
                setshow2(true)
            }

        }
    }

    const hitLungIntubation1 = async (val) => {
        console.log(val);
        lungIntubationApi1 = val
        var token = await localStorage.getItem("token")
        const body = {
            "double_lumen_ett": lungIntubationApi1
        }
        const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.data.status === "true") {
            console.log(res.data.data);
            setResp3(res.data.data)
            setshow3(true)
            setshow4(false)
            setshow5(false)
        }
    }

    const hitLungIntubation2 = async (obj) => {
        if (lungIntubation3.label === "Bronchial blocker") {
            dispatch(setLungSubSubIntubation3(obj))
            console.log(obj.value);
            lungIntubationApi2 = obj.value
            var token = await localStorage.getItem("token")
            const body =
            {

                "bronchial_blocker": lungIntubationApi2
            }

            const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (res.data.status === "true") {
                console.log(res.data.data);
                setResp4(res.data.data)
                setshow4(true)
                setshow5(false)
                setshow3(false)
            }
        }
        else if (lungIntubation3.label === "Univent") {
            console.log("run 3");
            dispatch(setLungSubSubIntubation3(obj))
            hitLungIntubation3()
            lungIntubationApi3 = obj.value
        }
    }

    const hitLungIntubation3 = async () => {
        var token = await localStorage.getItem("token")
        const body =
        {

            "univent": lungIntubationApi3
        }

        const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (res.data.status === "true") {
            console.log(res.data.data);
            setResp5(res.data.data)
            setshow5(true)
            setshow3(false)
            setshow4(false)
        }

    }
    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/startacase/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>POSTOP AIRWAY</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="airway-main-container" >
                <div className="airway-question-container" >
                    {/* <div className="Airway-Equipment-header-container" >
                            Airway Equipment
                        </div> */}
                    <div className="Airway-Equipment-input-container" >
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Nasal Cannula with ETCO2</div>
                        </div>
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Mask</div>
                            <div className="mask-button-group-container" >
                                {optionformask.map((data) => {
                                    if (data.label === mask3.label) {
                                        return (

                                            <div onClick={() => dispatch(setMask3(data))} className="mask-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(setMask3(data))} className="mask-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>

                        </div>
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>LMA</div>
                            <div className="LMA-button-group-container" >{optionforLMA.map((data) => {
                                if (data.label === Lma3.label) {
                                    return (<div onClick={() => HitLma(data)} className="LMA-selected-type-button" >{data.label}</div>
                                    )
                                } else {
                                    return (<div onClick={() => HitLma(data)} className="LMA-type-button" >{data.label}</div>
                                    )
                                }
                            })}</div>
                            {selected_LMA.length !== 0 ?
                                <div>Details:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div> : <></>
                            }

                        </div>
                        {
                            show && resp ?
                                <>
                                    {
                                        resp.map((data) => {
                                            console.log(data)
                                            return (
                                                <div className="airwayAPI">
                                                    <h5>airway_exchanger_cook_fr:{data.airway_exchanger_cook_fr}</h5>
                                                    <h5>lma_maximum_cuff_inflation_volume_ml_air:{data.lma_maximum_cuff_inflation_volume_ml_air}</h5>
                                                    <h5>lma_maximum_ett_size:{data.lma_maximum_ett_size}</h5>
                                                    <h5>maximum_fob_size_mm:{data.maximum_fob_size_mm}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                </>
                        }
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Intubation - Standard</div>

                            <div className="Intubation-standard-button-group-container" >{optionforIntubation_Standard.map((data, index) => {
                                if (data.label === intubation3.label) {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="Intubation-standard-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="Intubation-standard-type-selected-type-button"  >{data.label}</div>)
                                }
                            })}</div>
                            {Intubation_Standard_type.length ?
                                <div>
                                    <div>Select any one from following:</div>
                                    <div className="Intubation-standard-button-group-container" >{Intubation_Standard_type.map((data) => {
                                        if (data.label === subIntubation3.label) {
                                            return (<div className="Intubation-standard-selected-type-button" onClick={() => hitIntubation(data)} >{data.label}</div>)
                                        }
                                        else {
                                            return (<div className="Intubation-standard-type-selected-type-button" onClick={() => hitIntubation(data)} >{data.label}</div>)
                                        }
                                    })}</div>
                                </div> : <></>
                            }
                        </div>
                        {
                            show2 && resp2 ?
                                <>
                                    {
                                        resp2.map((data) => {
                                            return (
                                                <div className="airwayAPI">
                                                    <h5>airway_exchanger_cook_fr:{data.airway_exchanger_cook_fr}</h5>
                                                    <h5>et_tube_insertion_lengh_at_lips_cm:{data.et_tube_insertion_lengh_at_lips_cm}</h5>
                                                    <h5>lma_size:{data.lma_size}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                </>
                        }

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Intubation - One lung</div>
                            <div className="Intubation-one-lung-button-group-container" >{optionforIntubation_One_lung.map((data) => {
                                if (data.label === lungIntubation3.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung.map((data) => {
                                if (data.label === lungSubIntubation3.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>

                            <div>Select any one from following:</div>
                            {lungIntubation3.value === "Double lumen ETT" ?
                                <></>
                                :
                                <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung_type.map((data) => {
                                    if (data.label === lungSubSubIntubation3.label) {
                                        return (<div className="Intubation-one-lung-type-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
                                    }
                                    else {
                                        return (<div className="Intubation-one-lung-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
                                    }
                                })}</div>
                            }


                        </div>
                        {
                            show3 ?
                                <>
                                    {
                                        resp3.map((data) => {
                                            return (
                                                <div className="airwayAPI">
                                                    <h5>maximum_fob_size_mm:{data.maximum_fob_size_mm}</h5>
                                                    <h5>et_tube_cuffed_mm:{data.et_tube_cuffed_mm}</h5>
                                                    <h5>maximum_fob_size_mm:{data.maximum_fob_size_mm}</h5>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                </>
                        }
                        {
                            show4 && resp4 ?
                                <>
                                    {resp4.map((data) => {
                                        return (
                                            <div className="airwayAPI">
                                                <h5>bronchial_blocker_fr_min : {data.bronchial_blocker_fr_min}</h5>
                                                <h5>bronchial_blocker_fr_max : {data.bronchial_blocker_fr_max}</h5>
                                            </div>
                                        )
                                    })}

                                </>
                                :
                                <>
                                </>
                        }
                        {
                            show5 && resp5 ?
                                <>
                                    {resp5.map((data) => {
                                        return (
                                            <div className="airwayAPI">
                                                <h5>univent_mm_min : {data.univent_mm_min}</h5>
                                                <h5>univent_mm_max : {data.univent_mm_max}</h5>
                                            </div>
                                        )
                                    })}

                                </>
                                :
                                <>
                                </>
                        }
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Laryngoscope</div>
                            <div className="Laryngoscope-button-group-container" >{optionforLaryngoscope.map((data) => {
                                if (data.label === laryngoscopeType3.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container" >{Laryngoscope.map((data) => {
                                if (data.label === laryngoscopeSubType3.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container" >{Laryngoscope_type.map((data) => {
                                if (data.label === laryngoscopeSubSubType3.label) {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType3(data))} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType3(data))} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Adjuncts</div>
                            <div className="Airway-Adjuncts-button-group-container" >{optionforAirway_Adjuncts.map((data) => {
                                if (data.label === airwayAdjunct3.label) {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>
                            <div className="Airway-Adjuncts-button-group-container" >{Airway_Adjuncts_type.map((data) => {
                                if (data.label === airwayAdjunctType3.label) {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType3(data))} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType3(data))} className="Airway-Adjuncts-type-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Other (airway management)</div>
                            <div className="Other-button-group-container" >{optionforOther.map((data) => {
                                if (data.label === airwayOther3.label) {
                                    return (<div className="Intubation-one-lung-type-selected-type-button" onClick={() => dispatch(setAirwayOther3(data))} >{data.label}</div>)
                                }
                                else {
                                    return (<div className="Other-selected-type-button" onClick={() => dispatch(setAirwayOther3(data))} >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Calculators</div>
                            <div className="mask-button-group-container" >

                                {Airawy_calculactor.map((data) => {
                                    if (data.label === airwayCalc3.label) {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc3(data))} className="airway-calculator-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc3(data))} className="airway-calculator-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>
                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Notes</div>
                            <input onChange={(e) => dispatch(setAirwayNotes3(e.target.value))} className="input-container" placeholder="enter other/not listed..." />

                        </div>





                    </div>


                </div>
            </div>
            <div onClick={() => saveAirwayData()} className="btn-btn">
                <a style={{ backgroundColor: "Black", color: "white", padding: 10 }} className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default EmergenceAirway