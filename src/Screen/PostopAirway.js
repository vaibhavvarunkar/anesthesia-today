import React, { useState } from 'react'
import '../css/Aiway.css'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAirwayAdjunct2, setAirwayAdjunctType2, setAirwayCalc2, setAirwayNotes2, setAirwayOther2, setIntubation2, setLaryngoscopeMain2, setLaryngoscopeSubSubType2, setLaryngoscopeSubType2, setLma2, setLungIntubation2, setLungSubIntubation2, setLungSubSubIntubation2, SetMask2, setSubIntubation2 } from '../redux/PostopAirwayActions'
import Axios from 'axios'
import { API_ROOT } from '../constants'

const PostopAirway = (props) => {
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
        dispatch(setIntubation2(selectedOption))
    }
    const handleChangeIntubation_One_lung = selectedOption => {
        setIntubation_One_lung(selectedOption.subcategory)
        dispatch(setLungIntubation2(selectedOption))
    }

    const handleChangeIntubation_One_lung_type = selectedOption => {
        console.log(selectedOption)
        setIntubation_One_lung_type(selectedOption.subcategory)
        dispatch(setLungSubIntubation2(selectedOption))
        if (lungIntubation2.label === "Double lumen ETT")
            hitLungIntubation1(selectedOption.value)
    }

    const handleChangeLaryngoscope = selectedOption => {
        setLaryngoscope(selectedOption.subcategory)
        dispatch(setLaryngoscopeMain2(selectedOption))
    }
    const handleChangeLaryngoscope_type = selectedOption => {
        setLaryngoscope_type(selectedOption.subcategory)
        dispatch(setLaryngoscopeSubType2(selectedOption))
    }

    const handleChangeAirway_Adjuncts = selectedOption => {
        setAirway_Adjuncts_type(selectedOption.subcategory)
        dispatch(setAirwayAdjunct2(selectedOption))
    }

    const handleChangeAirwayCalculator = selectedOption => {
        setaiwayCalculatorSelected(selectedOption)
    }



    const dispatch = useDispatch()

    const mask2 = useSelector(state => state.PostopAirwayReducer.mask2)
    const Lma2 = useSelector(state => state.PostopAirwayReducer.Lma2)
    const intubation2 = useSelector(state => state.PostopAirwayReducer.intubation2)
    const subIntubation2 = useSelector(state => state.PostopAirwayReducer.subIntubation2)
    const lungIntubation2 = useSelector(state => state.PostopAirwayReducer.lungIntubation2)
    const lungSubIntubation2 = useSelector(state => state.PostopAirwayReducer.lungSubIntubation2)
    const lungSubSubIntubation2 = useSelector(state => state.PostopAirwayReducer.lungSubSubIntubation2)
    const laryngoscopeType2 = useSelector(state => state.PostopAirwayReducer.laryngoscopeType2)
    const laryngoscopeSubType2 = useSelector(state => state.PostopAirwayReducer.laryngoscopeSubType2)
    const laryngoscopeSubSubType2 = useSelector(state => state.PostopAirwayReducer.laryngoscopeSubSubType2)
    const airwayCalc2 = useSelector(state => state.PostopAirwayReducer.airwayCalc2)
    const airwayAdjunct2 = useSelector(state => state.PostopAirwayReducer.airwayAdjunct2)
    const airwayAdjunctType2 = useSelector(state => state.PostopAirwayReducer.airwayAdjunctType2)
    const airwayOther2 = useSelector(state => state.PostopAirwayReducer.airwayOther2)

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
            "mask": mask2,
            "lma_size": Lma2,
            "lma_size_details": ["test2", "test3"],
            "intubation_standard_location": subIntubation2,
            "intubation_standard_et_tube_uncuffed_size": subIntubation2,
            "intubation_standard_et_tube_uncuffed_details": ["test2", "test3"],
            "intubation_standard_et_tube_cuffed_size": subIntubation2,
            "intubation_standard_et_tube_cuffed_details": ["test2", "test3"],
            "intubation_one_lung_double_lumen_ett_size": lungIntubation2,
            "intubation_one_lung_double_lumen_ett_details": ["test2", "test3"],
            "intubation_one_lung_bronchial_blocker_ett_size": lungSubSubIntubation2,
            "intubation_one_lung_bronchial_blocker_ett_details": ["test2", "test3"],
            "intubation_one_lung_univent_ett_size": lungSubSubIntubation2,
            "intubation_one_lung_univent_ett_details": ["test2", "test3"],
            "laryngoscope_type": laryngoscopeType2,
            "laryngoscope_type_brand_equipment": laryngoscopeSubType2,
            "laryngoscope_type_brand_equipment_size": laryngoscopeSubSubType2,
            "airway_adjuncts_oral_airway_size": airwayAdjunctType2,
            "airway_adjuncts_oral_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_oral_airway_weight_based_recommended_size": "test6",
            "airway_adjuncts_nasal_airway_size": airwayAdjunctType2,
            "airway_adjuncts_nasal_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_resuscitation_bag": "test6",
            "airway_adjuncts_other": "test6",
            "other_airway_management": airwayOther2,
            "airway_notes_images": "test6",
            "airway_notes_text": setAirwayNotes2,
            "airway_calculator_formula": airwayCalc2,
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
        dispatch(setLma2(obj))
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
        dispatch(setSubIntubation2(obj))
        IntubationApi = obj.value
        var token = await localStorage.getItem("token")
        if (intubation2.label === "ET Tube Uncuffed") {
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
        if (lungIntubation2.label === "Bronchial blocker") {
            dispatch(setLungSubSubIntubation2(obj))
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
        else if (lungIntubation2.label === "Univent") {
            console.log("run 3");
            dispatch(setLungSubSubIntubation2(obj))
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
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span class="tooltiptext">Return to Action Summary</span></span></Link>POSTOP AIRWAY           <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container">
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
                            <div className="mb-3">Mask</div>
                            <div className="mask-button-group-container btn-group" >
                                {optionformask.map((data) => {
                                    if (data.label === mask2.label) {
                                        return (

                                            <div onClick={() => dispatch(SetMask2(data))} className="btn mask-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(SetMask2(data))} className="btn mask-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>

                        </div>
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>LMA</div>
                            <div className="LMA-button-group-container btn-group" >{optionforLMA.map((data) => {
                                if (data.label === Lma2.label) {
                                    return (<div onClick={() => HitLma(data)} className="btn LMA-selected-type-button" >{data.label}</div>
                                    )
                                } else {
                                    return (<div onClick={() => HitLma(data)} className="btn LMA-type-button" >{data.label}</div>
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

                            <div className="Intubation-standard-button-group-container btn-group" >{optionforIntubation_Standard.map((data, index) => {
                                if (data.label === intubation2.label) {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="btn Intubation-standard-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="btn Intubation-standard-type-selected-type-button"  >{data.label}</div>)
                                }
                            })}</div>
                            {Intubation_Standard_type.length ?
                                <div>
                                    <div>Select any one from following:</div>
                                    <div className="Intubation-standard-button-group-container btn-group" >{Intubation_Standard_type.map((data) => {
                                        if (data.label === subIntubation2.label) {
                                            return (<div className="btn Intubation-standard-selected-type-button" onClick={() => hitIntubation(data)} >{data.label}</div>)
                                        }
                                        else {
                                            return (<div className="btn Intubation-standard-type-selected-type-button" onClick={() => hitIntubation(data)} >{data.label}</div>)
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
                            <div className="Intubation-one-lung-button-group-container btn-group" >{optionforIntubation_One_lung.map((data) => {
                                if (data.label === lungIntubation2.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Intubation-one-lung-button-group-container btn-group" >{Intubation_One_lung.map((data) => {
                                if (data.label === lungSubIntubation2.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>

                            <div>Select any one from following:</div>
                            {lungIntubation2.value === "Double lumen ETT" ?
                                <></>
                                :
                                <div className="Intubation-one-lung-button-group-container btn-group" >{Intubation_One_lung_type.map((data) => {
                                    if (data.label === lungSubSubIntubation2.label) {
                                        return (<div className="btn Intubation-one-lung-type-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
                                    }
                                    else {
                                        return (<div className="btn Intubation-one-lung-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
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
                            <div className="Laryngoscope-button-group-container btn-group" >{optionforLaryngoscope.map((data) => {
                                if (data.label === laryngoscopeType2.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container btn-group" >{Laryngoscope.map((data) => {
                                if (data.label === laryngoscopeSubType2.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container btn-group" >{Laryngoscope_type.map((data) => {
                                if (data.label === laryngoscopeSubSubType2.label) {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType2(data))} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType2(data))} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Adjuncts</div>
                            <div className="Airway-Adjuncts-button-group-container btn-group" >{optionforAirway_Adjuncts.map((data) => {
                                if (data.label === airwayAdjunct2.label) {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="btn Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>
                            <div className="Airway-Adjuncts-button-group-container btn-group" >{Airway_Adjuncts_type.map((data) => {
                                if (data.label === airwayAdjunctType2.label) {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType2(data))} className="btn Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType2(data))} className="btn Airway-Adjuncts-type-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Other (airway management)</div>
                            <div className="Other-button-group-container btn-group" >{optionforOther.map((data) => {
                                if (data.label === airwayOther2.label) {
                                    return (<div className="btn Intubation-one-lung-type-selected-type-button" onClick={() => dispatch(setAirwayOther2(data))} >{data.label}</div>)
                                }
                                else {
                                    return (<div className="btn Other-selected-type-button" onClick={() => dispatch(setAirwayOther2(data))} >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div className="mb-3">Airway Calculators</div>
                            <div className="mask-button-group-container btn-group" >

                                {Airawy_calculactor.map((data) => {
                                    if (data.label === airwayCalc2.label) {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc2(data))} className="btn airway-calculator-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc2(data))} className="btn airway-calculator-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>
                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div className="mb-3">Airway Notes</div>
                            <input onChange={(e) => dispatch(setAirwayNotes2(e.target.value))} className="ant-text-input" style={{marginLeft:'0px'}} placeholder="Enter other/not listed..." />

                        </div>





                    </div>


                </div>
            </div>
            </div>
            <div onClick={() => saveAirwayData()} className="btn-btn">
                <a className="risk-btn save-button-container">Submit</a>
            </div>
        </div>
    )
}

export default PostopAirway