import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/maintainces.css'
import Select from 'react-select'
import OtherBtn from './OtherBtn'
import { API_ROOT } from '../constants'
import Axios from "axios"
import { Link } from 'react-router-dom'

const Maintainces = (props) => {
    const fluidType = [
        { value: 'Colloid', label: 'Colloid', subcategory: [{ value: 'Albumin 5%', label: 'Albumin 5%' }, { value: 'Albumin 25%', label: 'Albumin 25%' }, { value: 'Hydroxy-Ethyl-Starches', label: 'Hydroxy-Ethyl-Starches' }] },
        { value: 'Crystalloid', label: 'Crystalloid', subcategory: [{ value: 'Normal Saline', label: 'Normal Saline' }, { value: '1/2 Normal Saline', label: '1/2 Normal Saline' }, { value: '3% Normal Saline', label: '3% Normal Saline' }, { value: 'Lactated Ringers', label: 'Lactated Ringers' }, { value: 'Plasma-lyte', label: 'Plasma-lyte' }, { value: 'D5W', label: 'D5W' }, { value: 'D5W 1/2 NS', label: 'D5W 1/2 NS' }, { value: 'D5W LR', label: 'D5W LR' }] },

    ]
    const TransfusionType = [
        { value: 'Blood Products', label: 'Blood Products', subcategory: [{ value: 'PRBCs', label: 'PRBCs' }, { value: 'Whole blood', label: 'Whole blood' }, { value: 'FFP', label: 'FFP' }, { value: 'Cryoprecipitate', label: 'Cryoprecipitate' }, { label: 'Platelets', value: 'Platelets' }, { label: 'Factor VII', value: 'Factor VII' }, { label: 'Factor VIII', value: 'Factor VIII' }, { label: 'OTHER', value: 'OTHER' }] }
    ]
    const [tidal_volume_min, settidal_volume_min] = useState(null)
    const [tidal_volume_max, settidal_volume_max] = useState(null)
    const [respiratory_rate, setrespiratory_rate] = useState(null)
    const [peep, setpeep] = useState(null)
    const [pip, setpip] = useState(null)
    const [fluidSubType, setfluidSubType] = useState([])
    const [fluidSelectedType, setfluidSelectedType] = useState([])
    const [transfusionSubType, settransfusionSubType] = useState([])
    const [transfusionSelectedType, settransfusionSelectedType] = useState([])

    const [refresh, setrefresh] = useState({})
    const [maintainceArray, setmaintainceArray] = useState([
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
        {
            id: 5,
            name: 'VENTILATION'
        },
        {
            id: 6,
            name: 'FLUIDS & TRANSFUSIONS'
        },
        {
            id: 7,
            name: 'ANTIEMETICS'
        },
        // {
        //     id: 8,
        //     name: 'OTHER/NOT LISTED'
        // },


    ])
    const [isVentilation, setisVentilation] = useState(false)
    const [isFluid, setisFluid] = useState(false)
    const [dose, setDose] = useState("")
    const [result, setResult] = useState("")

    const [colloidState, setColloidState] = useState(null)
    const [crystalloidState, setCrystalloidState] = useState(null)
    const [colloidSubType, setColloidSubType] = useState(null)
    const [crystSubType, setCrystSubType] = useState(null)
    const [maintainanceRate, setMaintainanceRate] = useState("")
    const [maintainanceRateUnit, setMaintainanceRateUnit] = useState(null)
    const [adminRate, setAdminRate] = useState("")
    const [adminRateUnit, setAdminRateUnit] = useState(null)
    const [transfusionType, setTransfusionType] = useState(null)
    const [maintainanceRate2, setMaintainanceRate2] = useState("")
    const [maintainanceRateUnit2, setMaintainanceRateUnit2] = useState(null)
    const [adminRate2, setAdminRate2] = useState("")
    const [adminRateUnit2, setAdminRateUnit2] = useState(null)


    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }
    const handleChangeFluid = selectionOption => {
        console.log(selectionOption);
        setfluidSubType(selectionOption.subcategory)
        if (selectionOption.value === "Colloid") {
            setColloidState(selectionOption.value)
        }
        if (selectionOption.value === "Crystalloid") {
            setCrystalloidState(selectionOption.value)
        }
    }

    const handleChangeFluidType = selectionOption => {
        console.log(selectionOption);
        setfluidSelectedType(selectionOption)
        if (colloidState !== null && crystalloidState === null) {
            setColloidSubType(selectionOption.value)
        }
        if (crystalloidState !== null && colloidState === null) {
            setCrystSubType(selectionOption.value)
        }
    }

    const handleChangeTransfusion = selectionOption => {
        //console.log(selectionOption.subcategory)
        settransfusionSubType(selectionOption.subcategory)
    }

    const handleChangeTransfusionType = selectionOption => {
        transfusionSelectedType.push(selectionOption)
        console.log(selectionOption);
        setrefresh({})
        setTransfusionType(selectionOption.value)
    }

    useEffect(() => {
        // console.log(transfusionSelectedType)
    }, [refresh])



    const bloodProds = [
        {
            name: "PRBCs",
            dose: "10 mL/kg",
            expectedResult: "HCT 3-7%"
        },
        {
            name: "Whole Blood",
            dose: "10 mL/kg",
            expectedResult: "HCT 2-4%"
        },
        {
            name: "FFP",
            dose: "10 mL/kg",
            expectedResult: "Coag factors 15-30%"
        },
        {
            name: "Cryoprecipitate",
            dose: "1-2 mL/kg",
            expectedResult: "Fibrinogen 50-100 mg/dl"
        },
        {
            name: "Platelets",
            dose: "5 mL/kg",
            expectedResult: "Platelets 50-100K"

        },
        {
            name: "Factor VII",
            dose: "90 mcg/kg",
            expectedResult: "0"

        },
        {
            name: "Factor VIII",
            dose: "1 unit/kg",
            expectedResult: "plasma level 2%"

        }
    ]




    const navigateToRiskEvalutionType = (value) => {
        if (value === "VENTILATION") {
            setisVentilation(!isVentilation)
        }
        if (value === "FLUIDS & TRANSFUSIONS") {
            setisFluid(!isFluid)
        }
    }

    const saveMaintainceVentilations = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-maintainance-ventilations?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                case_id: "30",
                tidal_volume_min: tidal_volume_min,
                tidal_volume_max: tidal_volume_max,
                respiratory_rate: respiratory_rate,
                peep: peep,
                pip: pip

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

    const saveMaintainceFluids = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-maintainance-fluids?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                case_id: "30",
                fluid_type: ["test drug11", "test drug22"]

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


    const saveMaintainceData = async () => {
        try {
            const token = await localStorage.getItem('token')
            const url = API_ROOT + `save-maintainances?token=${token}`
            const body = {
                "case_id": "30",
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

    const hitApis = () => {
        console.log("run run");
        if (colloidState !== null && crystalloidState === null) {
            console.log("run col");
            saveFluidColloid()
        }
        if (crystalloidState !== null && colloidState === null) {
            saveCrystalColloid()
            console.log("run cry");
        }
    }

    const hitApis2 = () => {
        saveBloodTransfusion()
    }

    const saveBloodTransfusion = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-as-transfusion-bloods?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "28",
                "transfusion_blood_product_type": transfusionType,
                "maintenance_rate_numeric_rate": maintainanceRate2,
                "maintenance_rate_unit": maintainanceRateUnit2,
                "total_administered_numeric_rate": adminRate2,
                "total_administered_unit": adminRateUnit2

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


    const saveCrystalColloid = () => {
        var token = localStorage.getItem("token")
        fetch(API_ROOT + `save-as-fluid-crystalloid?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "27",
                "fluid_colloid_type": crystSubType,
                "maintenance_rate_numeric_rate": maintainanceRate,
                "maintenance_rate_unit": maintainanceRateUnit,
                "total_administered_numeric_rate": adminRate,
                "total_administered_unit": adminRateUnit

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

    const saveFluidColloid = () => {
        var token = localStorage.getItem("token")

        fetch(API_ROOT + `save-as-fluid-collide?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "case_id": "27",
                "fluid_colloid_type": colloidSubType,
                "maintenance_rate_numeric_rate": maintainanceRate,
                "maintenance_rate_unit": maintainanceRateUnit,
                "total_administered_numeric_rate": adminRate,
                "total_administered_unit": adminRateUnit

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


    const setUnit = (selectionOption) => {
        console.log(selectionOption);
        setMaintainanceRateUnit(selectionOption.value)
    }

    const setAdminUnit = (selectionOption) => {
        setAdminRateUnit(selectionOption.value)
    }

    const setMaintainance2 = (selectionOption) => {
        setMaintainanceRateUnit2(selectionOption.value)
    }

    const setAdmin2 = (selectionOption) => {
        setAdminRate2(selectionOption.value)
    }

    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            background: '#fff',
            borderColor: '#9e9e9e',
            minHeight: '50px',
            height: '50px',
            boxShadow: state.isFocused ? null : null,
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '50px',
            padding: '0 6px',
            // fontSize: "small"
        }),

        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        indicatorSeparator: state => ({
            display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
            ...provided,
            height: '10px',
        })
    };

    return (
        <div>

            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>MAINTAINANCE</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
            <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>MAINTAINANCE
            <h4 className="hidn">CRISES</h4>
            </div>
            <div className="maintaince-main-container" >
                <div className="maintaince-list-container" >
                    {
                        maintainceArray.map((data) => {
                            return (
                                <div style={{ width: '100%' }} >
                                    <div className="risk-ev" style={{ cursor: 'pointer' }} onClick={() => navigateToRiskEvalutionType(data.name)} >
                                        <h4>{data.name}</h4>
                                    </div>
                                    {
                                        data.name === "VENTILATION" && isVentilation ?
                                            <div className="ventilication-container" >
                                                <div>Tidal volume [ml]</div>
                                                <div className="min-container" >
                                                    <div>Min</div>
                                                    <div>
                                                        <input onChange={(e) => settidal_volume_min(e.target.value)} placeholder="enter min tidal valoume" />
                                                    </div>
                                                </div>
                                                <div className="min-container" >
                                                    <div>Max</div>
                                                    <div>
                                                        <input onChange={(e) => settidal_volume_max(e.target.value)} placeholder="enter max tidal valoume" />
                                                    </div>
                                                </div>
                                                <div className="min-container" >
                                                    <div>Respiratory Rate [breaths per min]</div>
                                                    <div>
                                                        <input onChange={(e) => setrespiratory_rate(e.target.value)} placeholder="enter Respiratory Rate [breaths per min]" />
                                                    </div>
                                                </div>
                                                <div className="min-container" >
                                                    <div>PEEP [cm H2O]</div>
                                                    <div>
                                                        <input onChange={(e) => setpeep(e.target.value)} placeholder="enter PEEP [cm H2O]" />
                                                    </div>
                                                </div>
                                                <div className="min-container" >
                                                    <div>PIP [cm H2O]</div>
                                                    <div>
                                                        <input onChange={(e) => setpip(e.target.value)} placeholder="enter PIP [cm H2O]" />
                                                    </div>
                                                </div>



                                            </div>
                                            :
                                            <></>
                                    }
                                    {
                                        isFluid && data.name === "FLUIDS & TRANSFUSIONS" ?
                                            <div className="fluid-container" >
                                                <div>Fluid Type</div>
                                                <div className="fluid-button-group-container" >
                                                    {
                                                        fluidType.map((data) => {
                                                            return (
                                                                <div onClick={() => handleChangeFluid(data)} className="fluid-type-button" >{data.label}</div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                                <div className="fluid-button-group-container" >
                                                    {
                                                        fluidSubType.map((data) => {
                                                            return (
                                                                <>
                                                                    <div onClick={() => handleChangeFluidType(data)} className="fluid-type-button" >{data.label}</div>
                                                                </>
                                                            )
                                                        })

                                                    }



                                                </div>
                                                {
                                                    fluidSelectedType.length !== 0 ?
                                                        <div className="ventilication-container-2" >
                                                            <div className="min-container" >
                                                                <div>Maintenance rate</div>
                                                                <div>
                                                                    <input onChange={(e) => setMaintainanceRate(e.target.value)} placeholder="Enter numeric value" />
                                                                </div>
                                                                <div>
                                                                    <Select className="main-drop-down" onChange={(value) => setUnit(value)} placeholder="unit" options={[{ label: 'mL/hr', value: 'mL/hr' }, { label: 'L/hr', value: 'L/hr' }]} />

                                                                </div>
                                                            </div>
                                                            <div className="min-container" >
                                                                <div>Total administered</div>
                                                                <div>
                                                                    <input onChange={(e) => setAdminRate(e.target.value)} placeholder="Enter numeric value" />
                                                                </div>
                                                                <div>
                                                                    <Select onChange={(value) => setAdminUnit(value)} placeholder="unit" className="main-drop-down" options={[{ label: 'mL', value: 'mL' }, { label: 'L', value: 'L' }]} />

                                                                </div>
                                                            </div>
                                                            <div className="btn-btn">
                                                                <a onClick={hitApis} className="risk-btn">Submit</a>
                                                            </div>
                                                        </div>

                                                        :
                                                        <></>
                                                }

                                                <div>Transfusion Type</div>
                                                <div className="fluid-button-group-container" >
                                                    {
                                                        TransfusionType.map((data) => {
                                                            return (
                                                                <div onClick={() => handleChangeTransfusion(data)} className="fluid-type-button" >{data.label}</div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                                <div className="fluid-button-group-container" >
                                                    {
                                                        transfusionSubType.map((data) => {
                                                            return (
                                                                <div onClick={() => handleChangeTransfusionType(data)} className="fluid-type-button" >{data.label}</div>
                                                            )
                                                        })

                                                    }


                                                </div>

                                                {
                                                    transfusionSelectedType.length !== 0 ?

                                                        <div className="ventilication-container-2">
                                                            <div className="col" >
                                                                {
                                                                    transfusionSelectedType.map((data) => {
                                                                        console.log(data)
                                                                        for (var i = 0; i < bloodProds.length; i++) {
                                                                            if (data.value === bloodProds[i].name) {
                                                                                console.log(bloodProds[i].dose)
                                                                                return (
                                                                                    <div className="min-container" >
                                                                                        <p>{bloodProds[i].dose}</p>
                                                                                        <p>{bloodProds[i].expectedResult}</p>
                                                                                    </div>
                                                                                )
                                                                            }
                                                                        }
                                                                    })

                                                                }

                                                            </div>
                                                            <div className="min-container">
                                                                <div>Maintenance rate</div>
                                                                <div>
                                                                    <input onChange={(e) => setMaintainanceRate2(e.target.value)} placeholder="Enter numeric value" />
                                                                </div>
                                                                <div>
                                                                    <Select className="main-drop-down" onChange={(value) => setMaintainance2(value)} placeholder="unit" options={[{ label: 'mL/hr', value: 'mL/hr' }, { label: 'L/hr', value: 'L/hr' }]} />

                                                                </div>
                                                            </div>
                                                            <div className="min-container" >
                                                                <div>Total administered</div>
                                                                <div>
                                                                    <input onChange={(e) => setAdminRate2(e.target.value)} placeholder="Enter numeric value" />
                                                                </div>
                                                                <div>
                                                                    <Select className="main-drop-down" onChange={(value) => setAdmin2(value)} placeholder="unit" options={[{ label: 'mL', value: 'mL' }, { label: 'L', value: 'L' }]} />

                                                                </div>
                                                            </div>
                                                            <div className="btn-btn">
                                                                <a onClick={hitApis2} className="risk-btn">Submit</a>
                                                            </div>
                                                        </div>


                                                        :
                                                        <></>
                                                }


                                            </div>
                                            :
                                            <></>
                                    }
                                </div>
                            )
                        })
                    }
                </div>



            </div>

            <div className="risk-ev">
                <h4><OtherBtn /></h4>
            </div>
            <div className="btn-btn"  >
                <a className="risk-btn" style={{ backgroundColor: "violet" }} onClick={() => props.history.push('/allactionforactionsummary?addinto=favourite')}><i className="fa fa-plus-circle">&nbsp;&nbsp;</i>Add</a>
            </div>
            <div className="btn-btn">
                <a className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default Maintainces