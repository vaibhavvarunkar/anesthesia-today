import React, { useEffect, useState } from 'react'
import '../css/Aiway.css'
import Header from '../CustomComponent/Header'
import { setAirwayAdjunct, setAirwayAdjunctType, setAirwayCalc, setAirwayNotes, setAirwayOther, setIntubation, setLaryngoscopeMain, setLaryngoscopeSubSubType, setLaryngoscopeSubType, setLma, setLungIntubation, setLungSubIntubation, setLungSubSubIntubation, setMask, setSubIntubation } from '../redux/AirwayActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_ROOT } from '../constants'


const Airway = (props) => {
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
        dispatch(setIntubation(selectedOption))
    }
    const handleChangeIntubation_One_lung = selectedOption => {
        setIntubation_One_lung(selectedOption.subcategory)
        dispatch(setLungIntubation(selectedOption))
    }

    const handleChangeIntubation_One_lung_type = selectedOption => {
        console.log(selectedOption)
        setIntubation_One_lung_type(selectedOption.subcategory)
        dispatch(setLungSubIntubation(selectedOption))
        if (lungIntubation.label === "Double lumen ETT")
            hitLungIntubation1(selectedOption.value)
    }

    const handleChangeLaryngoscope = selectedOption => {
        setLaryngoscope(selectedOption.subcategory)
        dispatch(setLaryngoscopeMain(selectedOption))
    }
    const handleChangeLaryngoscope_type = selectedOption => {
        setLaryngoscope_type(selectedOption.subcategory)
        dispatch(setLaryngoscopeSubType(selectedOption))
    }

    const handleChangeAirway_Adjuncts = selectedOption => {
        setAirway_Adjuncts_type(selectedOption.subcategory)
        dispatch(setAirwayAdjunct(selectedOption))
    }

    const handleChangeAirwayCalculator = selectedOption => {
        setaiwayCalculatorSelected(selectedOption)
    }



    const dispatch = useDispatch()

    const mask = useSelector(state => state.AirReducer.mask)
    const Lma = useSelector(state => state.AirReducer.Lma)
    const intubation = useSelector(state => state.AirReducer.intubation)
    const subIntubation = useSelector(state => state.AirReducer.subIntubation)
    const lungIntubation = useSelector(state => state.AirReducer.lungIntubation)
    const lungSubIntubation = useSelector(state => state.AirReducer.lungSubIntubation)
    const laryngoscopeType = useSelector(state => state.AirReducer.laryngoscopeType)
    const laryngoscopeSubType = useSelector(state => state.AirReducer.laryngoscopeSubType)
    const laryngoscopeSubSubType = useSelector(state => state.AirReducer.laryngoscopeSubSubType)
    const airwayAdjunct = useSelector(state => (state.AirReducer.airwayAdjunct))
    const airwayAdjunctType = useSelector(state => (state.AirReducer.airwayAdjunctType))
    const airwayOther = useSelector(state => state.AirReducer.airwayOther)
    const airwayCalc = useSelector(state => state.AirReducer.airwayCalc)
    const airwayNotes = useSelector(state => state.AirReducer.airwayNotes)
    const lungSubSubIntubation = useSelector(state => state.AirReducer.lungSubSubIntubation)
    const [ref, setRef] = useState({})
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


    useEffect(() => {

    }, [resp])
    const saveAirwayData = async () => {
        // await CallAPI()
        var token = await localStorage.getItem("token")
        const body = {
            "case_id": "30",
            "type": "intraop",
            "nasal_cannula_with_etco2": "test3",
            "mask": mask,
            "lma_size": Lma,
            "lma_size_details": ["test2", "test3"],
            "intubation_standard_location": subIntubation,
            "intubation_standard_et_tube_uncuffed_size": subIntubation,
            "intubation_standard_et_tube_uncuffed_details": ["test2", "test3"],
            "intubation_standard_et_tube_cuffed_size": subIntubation,
            "intubation_standard_et_tube_cuffed_details": ["test2", "test3"],
            "intubation_one_lung_double_lumen_ett_size": lungSubIntubation,
            "intubation_one_lung_double_lumen_ett_details": ["test2", "test3"],
            "intubation_one_lung_bronchial_blocker_ett_size": lungSubSubIntubation,
            "intubation_one_lung_bronchial_blocker_ett_details": ["test2", "test3"],
            "intubation_one_lung_univent_ett_size": lungSubSubIntubation,
            "intubation_one_lung_univent_ett_details": ["test2", "test3"],
            "laryngoscope_type": laryngoscopeType,
            "laryngoscope_type_brand_equipment": laryngoscopeSubType,
            "laryngoscope_type_brand_equipment_size": laryngoscopeSubSubType,
            "airway_adjuncts_oral_airway_size": airwayAdjunctType,
            "airway_adjuncts_oral_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_oral_airway_weight_based_recommended_size": "test6",
            "airway_adjuncts_nasal_airway_size": airwayAdjunctType,
            "airway_adjuncts_nasal_airway_age_based_recommended_size": "test6",
            "airway_adjuncts_resuscitation_bag": "test6",
            "airway_adjuncts_other": "test6",
            "other_airway_management": airwayOther,
            "airway_notes_images": "test6",
            "airway_notes_text": airwayNotes,
            "airway_calculator_formula": airwayCalc,
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
    var dataPass = []


    const HitLma = async (obj) => {
        dispatch(setLma(obj))
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
            console.log(res.data.data);
            setshow(true)
            // var hashmap = { "aaa": "foo", "bbb": "bar" };
            console.log("before:");
            console.log(res.data.data);

            var newHashmap = {};
            Object.keys(res.data.data).forEach(function (key) {
                var value = res.data.data[key];
                key = "key";
                console.log("changing:");
                console.log(key);

                newHashmap[key] = value;
            });
            console.log("after:");
        }
    }

    const hitIntubation = async (obj) => {
        dispatch(setSubIntubation(obj))
        IntubationApi = obj.value
        var token = await localStorage.getItem("token")
        if (intubation.label === "ET Tube Uncuffed") {
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
        if (lungIntubation.label === "Bronchial blocker") {
            dispatch(setLungSubSubIntubation(obj))
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
        else if (lungIntubation.label === "Univent") {
            console.log("run 3");
            dispatch(setLungSubSubIntubation(obj))
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

    const nameJoin = []

    console.log(resp);
    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/startacase/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>POSTOP AIRWAY</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span class="tooltiptext">Return to Action Summary</span></span></Link> POSTOP AIRWAY
                <h4 className="hidn">CRISES</h4>
            </div>
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
                                    if (data.label === mask.label) {
                                        return (

                                            <div onClick={() => dispatch(setMask(data))} className="mask-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(setMask(data))} className="mask-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>

                        </div>
                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>LMA</div>
                            <div className="LMA-button-group-container" >{optionforLMA.map((data) => {
                                if (data.label === Lma.label) {
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
                        {/* {
                            show ?
                                <div className="airwayAPI">
                                    <h5>lma_maximum_cuff_inflation_volume_ml_air : {resp.lma_maximum_cuff_inflation_volume_ml_air}</h5>
                                    <h5>lma_maximum_ett_size : {resp.lma_maximum_ett_size}</h5>
                                    <h5>maximum_fob_size_mm : {resp.maximum_fob_size_mm}</h5>
                                    <h5>airway_exchanger_cook_fr : {resp.airway_exchanger_cook_fr}</h5>
                                </div>
                                :
                                <>
                                </>
                        } */}
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
                                if (data.label === intubation.label) {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="Intubation-standard-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_Standard(data)} className="Intubation-standard-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            {Intubation_Standard_type.length ?
                                <div>
                                    <div>Select any one from following:</div>
                                    <div className="Intubation-standard-button-group-container" >{Intubation_Standard_type.map((data) => {
                                        if (data.label === subIntubation.label) {
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
                                if (data.label === lungIntubation.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung.map((data) => {
                                if (data.label === lungSubIntubation.label) {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeIntubation_One_lung_type(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>

                            <div>Select any one from following:</div>
                            {lungIntubation.value === "Double lumen ETT" ?
                                <></>
                                :
                                <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung_type.map((data) => {
                                    if (data.label === lungSubSubIntubation.label) {
                                        return (<div className="Intubation-one-lung-type-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
                                    }
                                    else {
                                        return (<div className="Intubation-one-lung-selected-type-button" onClick={() => hitLungIntubation2(data)} >{data.label}</div>)
                                    }
                                })}
                                </div>

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
                                if (data.label === laryngoscopeType.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                }
                                else {
                                    return (<div onClick={() => handleChangeLaryngoscope(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container" >{Laryngoscope.map((data) => {
                                if (data.label === laryngoscopeSubType.label) {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeLaryngoscope_type(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>

                            <div className="Laryngoscope-button-group-container" >{Laryngoscope_type.map((data) => {
                                if (data.label === laryngoscopeSubSubType.label) {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType(data))} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setLaryngoscopeSubSubType(data))} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Adjuncts</div>
                            <div className="Airway-Adjuncts-button-group-container" >{optionforAirway_Adjuncts.map((data) => {
                                if (data.label === airwayAdjunct.label) {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => handleChangeAirway_Adjuncts(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>
                            <div>Select any one from following:</div>
                            <div className="Airway-Adjuncts-button-group-container" >{Airway_Adjuncts_type.map((data) => {
                                if (data.label === airwayAdjunctType.label) {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType(data))} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)
                                } else {
                                    return (<div onClick={() => dispatch(setAirwayAdjunctType(data))} className="Airway-Adjuncts-type-selected-type-button" >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Other (airway management)</div>
                            <div className="Other-button-group-container" >{optionforOther.map((data) => {
                                if (data.label === airwayOther.label) {
                                    return (<div className="Intubation-one-lung-type-selected-type-button" onClick={() => dispatch(setAirwayOther(data))} >{data.label}</div>)
                                }
                                else {
                                    return (<div className="Other-selected-type-button" onClick={() => dispatch(setAirwayOther(data))} >{data.label}</div>)
                                }
                            })}</div>


                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Calculators</div>
                            <div className="mask-button-group-container" >

                                {Airawy_calculactor.map((data) => {
                                    if (data.label === airwayCalc.label) {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc(data))} className="airway-calculator-selected-type-button" >{data.label}</div>
                                        )
                                    } else {
                                        return (

                                            <div onClick={() => dispatch(setAirwayCalc(data))} className="airway-calculator-type-button" >{data.label}</div>
                                        )
                                    }
                                })}
                            </div>
                        </div>

                        <div className="Airway-Equipment-input-container-subcontainer" >
                            <div>Airway Notes</div>
                            <input onChange={(e) => dispatch(setAirwayNotes(e.target.value))} className="input-container" placeholder="enter other/not listed..." />

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
export default Airway