import React, { useState, useEffect } from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/AllAction.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import axios from 'axios';
import Spinner from '../CustomComponent/Spinner';

const AllAction = (props) => {
    const [isSub, setSub] = useState(false)
    const [actionLibraryData, setactionLibraryData] = useState([])
    const [burgerMenu, setburgerMenu] = useState(false)
    const [subCategory, setsubCategory] = useState([])
    const [subsubCategory, setsubsubCategory] = useState([])
    const [subsub, setsubsub] = useState(false)
    const [subId, setsubId] = useState(null)
    const [subName, setsubName] = useState(null)
    const [subsubsubCategory, setsubsubsubCategory] = useState([])
    const [subsubId, setsubsubId] = useState(null)
    const [subsubsub, setsubsubsub] = useState(false)
    const [subnewPage, setsubnewPage] = useState(false)
    const [newpagesubData, setnewpagesubData] = useState([])
    const [sub4Category, setSub4Category] = useState([])
    const [sub4, setSub4] = useState(false)
    const [sub4Id, setSub4Id] = useState(null)
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false);
    const [ref, setRef] = useState({})
    const [load, setLoad] = useState(false)


    console.log(props.location.state);

    useEffect(() => {
        getActionLibrary()

    }, [])

    useEffect(() => {
        if (props.location.state !== null) {
            if (props.location.state === "ANTIBIOTICS") {

                onClickCategory("Drugs")
                setRef({})
                onClickSubCategory(38, "Drugs", props.location.state)
                setRef({})
            }
            else if (props.location.state === "EMERGENCY DRUGS") {
                onClickCategory("Drugs")
                setRef({})
                onClickSubCategory(104, "Drugs", props.location.state)
                setRef({})
            }
            else {
                console.log("run man");
                onClickCategory(props.location.state)
            }
        }

    }, [subCategory, actionLibraryData])

    useEffect(() => {

    })

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

                    const obj = [{
                        name: "Crises",
                        displayName: "CRISES",
                        data: res.data.crises
                    },
                    {
                        name: "Case Tips",
                        displayName: "CASE TIPS",
                        data: res.data.caseTips
                    }, {
                        name: "Airway & Equipments",
                        displayName: "AIRWAY & EQUIPMENTS",
                        data: res.data.airwayAndEquipments
                    }, {
                        name: "Drugs",
                        displayName: "DRUGS",
                        data: res.data.drugs
                    }, {
                        name: "Preoperative Evaluation",
                        displayName: "PREOPERATIVE EVALUATION",
                        data: res.data.preoperativeEvaluations
                    }, {
                        name: "Regional Anesthesia",
                        displayName: "REGIONAL ANESTHESIA",
                        data: res.data.regionalAndNAnesthesia
                    },
                    {
                        name: "Checklists",
                        displayName: "CHECKLISTS",
                        data: res.data.checklists
                    },
                    {
                        name: "Local Anesthesia",
                        displayName: "LOCAL ANESTHESIA",
                        data: res.data.local_anesthetic_max
                    },
                    {
                        name: "Fluids And Transfusions",
                        displayName: "FLUIDS AND TRANSFUSIONS",
                        data: res.data.fluids_and_transfusions
                    },
                    {
                        name: "Calculations And Scores",
                        displayName: "CALCULATIONS AND SCORES",
                        data: res.data.calculations_and_rs,
                    },
                    {
                        name: "LA MAX CALCULATOR",
                        displayName: "LA MAX CALCULATOR",
                    }
                    ]
                    console.log(obj)

                    setactionLibraryData(obj);
                    setLoading(true);
                }

            })
    }



    const onClickCategory = (name) => {
        console.log("run");
        console.log(name);
        setsubId(null)
        setsubName(name)
        for (var i = 0; i < actionLibraryData.length; i++) {
            if (actionLibraryData[i].name === name) {
                if (name === "Local Anesthesia") {
                    props.history.push({
                        pathname: "/newAfterlamax",
                        state: "Return To Action Library"
                    })
                }
                else if (name === "LA MAX CALCULATOR") {
                    props.history.push({
                        pathname: "/newAfterlamax",
                        state: "Return To Action Library"
                    })
                }
                setsubCategory(actionLibraryData[i].data)
                setSub(true)
            }
        }
    }

    const onClickSubCategory = (id, name, drug_name) => {
        console.log(drug_name);
        console.log(name);
        console.log(id);
        console.log("run2");
        setsubId(id)
        for (var i = 0; i < subCategory.length; i++) {
            if (subCategory[i].id === id && name === "Crises") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].crises_sub_type)
            } else if (subCategory[i].id === id && name === "Case Tips") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].case_tip_sub_type)
            } else if (subCategory[i].id === id && name === "Airway & Equipments") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)
            } else if (subCategory[i].id === id && name === "Drugs") {
                setsubsub(true)
                subCategory[i].sub_type.forEach(element => {

                    element.name = element.drug_name;

                });
                setsubsubCategory(subCategory[i].sub_type)

                if (subCategory[i].sub_type.length === 0) {
                    props.history.push({
                        pathname: '/resultOfAction',
                        state: {
                            parentId: null,
                            subId: id,
                            subName: drug_name,
                            parentName: name
                        }
                    });
                }

            }
            else if (subCategory[i].id === id && name === "Preoperative Evaluation") {
                setsubsub(true)
                // setsubsubCategory(subCategory[i].sub_type)
                if (drug_name === "PREOPERATIVE TESTING") {
                    props.history.push({
                        pathname: "/preoperativeevaluation"
                    })
                }
                else if (drug_name === "RISK EVALUATION") {
                    props.history.push({
                        pathname: "/riskevalution"
                    })
                }
            }
            else if (subCategory[i].id === id && name === "Regional Anesthesia") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)
            } else if (subCategory[i].id === id && name === "Checklists") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].checklist_sub_type)
            }
            else if (subCategory[i].id === id && name === "Fluids And Transfusions") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)
            }
            else if (subCategory[i].id === id && name === "Calculations And Scores") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)
            }
        }
    }

    const lastListClicked = (id, dataid, name, drug_name) => {
        console.log(drug_name);
        // console.log("run");
        console.log(id, name);
        setsubsubId(id)
        for (var i = 0; i < subsubCategory.length; i++) {
            if (subsubCategory[i].id === id && name === "Drugs") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].sub_type)
                // console.log(subsubCategory[i].sub_type);
                if (subsubCategory[i].sub_type.length === 0) {
                    props.history.push({
                        pathname: '/resultOfAction',
                        state: {
                            parentId: null,
                            subId: id,
                            subName: drug_name,
                            parentName: name
                        }
                    });
                }
            }
            else if (subsubCategory[i].id === id && name === "Airway & Equipments") {
                console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].sub_type)
                console.log(subsubCategory[i].sub_type);
            }
            else if (subsubCategory[i].id === id && name === "Case Tips") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].case_tip_sub_type)
                // console.log(subsubCategory[i].case_tip_sub_type);
            }
            else if (subsubCategory[i].id === id && name === "Checklists") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].checklist_sub_type)
                // console.log(subsubCategory[i].checklist_sub_type);
            }
            else if (subsubCategory[i].id === id && name === "Regional Anesthesia") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].sub_type)
                // console.log(subsubCategory[i].sub_type);
            }
            else if (subsubCategory[i].id === id && name === "Fluids And Transfusions") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].sub_type)
                // console.log(subsubCategory[i].sub_type);
            }
            else if (subsubCategory[i].id === id && name === "BRADYCARDIA") {
                console.log("run");
                bradycardia()
            }
        }
    }

    const lastestClick = async (id, dataId, name, dName) => {
        console.log(id, dataId, name, dName);
        for (var i = 0; i < sub4Category.length; i++) {
            if (sub4Category[i].id === id && dName === "Regional Anesthesia") {
                var token = localStorage.getItem("token")
                fetch(API_ROOT + `get-specific-block-links?token=${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "block_id": id
                    })
                })
                    .then(response => response.json())
                    .then(res => {
                        console.log(res)
                        if (res.status === "true") {
                            console.log(res.data)
                            props.history.push({
                                pathname: "/subRegionalAnesthesia",
                                state: {
                                    data: res.data,
                                    name: name
                                }
                            })
                        }
                    })

                // props.history.push({
                //     pathname: "/subRegionalAnesthesia",
                //     state: result
                // })
            }
        }
    }

    const bradycardia = async () => {
        try {
            const token = localStorage.getItem('token')
            const url = API_ROOT + `crises-data?token=${token}`
            const res = await axios.post(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data.data)
            props.history.push({
                pathname: "/bradycardia",
                state: res.data.data
            })
        }

        catch (error) {
            console.log(error)
        }
    }


    const lastLastClick = (id, drug_name, name, subName) => {
        console.log(id);
        console.log(drug_name);
        console.log(name)
        console.log(subName)
        setSub4Id(id)
        for (var i = 0; i < subsubsubCategory.length; i++) {
            if (subsubsubCategory[i].id === id && name === "Fluids And Transfusions") {
                // console.log("run");
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
                // console.log(subsubsubCategory[i].sub_type);
            }
            else if (subsubsubCategory[i].id === id && name === "Airway & Equipments") {
                console.log("run")
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
                if (subName === "LMA") {
                    props.history.push({
                        pathname: "/afterAirway",
                        state: {
                            name: subName,
                            value: drug_name
                        }
                    })
                }
            }
            else if (subsubsubCategory[i].id === id && name === "Regional Anesthesia") {
                console.log("run")
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
            }
            else if (subsubsubCategory[i].id === id && name === "Drugs") {
                console.log("run")
                setSub4(true)
                if (subName === "SURGERY TYPE") {
                    props.history.push({
                        pathname: "/drugInfo",
                        state: subsubsubCategory[i].sub_type
                    })
                }
                else if (subName === "ANTIBIOTIC CLASS") {
                    if (subsubsubCategory[i].sub_type.length === 0) {
                        props.history.push({
                            pathname: '/resultOfAction',
                            state: {
                                subParent: subName,
                                parentId: null,
                                subId: id,
                                subName: drug_name,
                                parentName: name
                            }
                        });
                    }
                }

            }
        }
    }

    // console.log(sub4Category);

    const handleNewPage = (id, name, subName) => {
        for (var i = 0; i < subsubsubCategory.length; i++) {
            if (subsubsubCategory[i].id === id && name === "Case Tips") {
                // console.log("run");
                // setsubsubsub(true)
                setsubnewPage(true)
                // setnewpagesubData(subsubsubCategory[i].case_tip_sub_type)
                // console.log((subsubsubCategory[i].case_tip_sub_type));
                props.history.push({
                    pathname: '/casetipsubinfo',
                    state: {
                        dataInfo: subsubsubCategory[i].case_tip_sub_type,
                        case_name: subName
                    }
                });
            }
        }

    }

    const apiCall = (value, name) => {
        props.history.push({
            pathname: "/afterAirway",
            state: {
                name: name,
                value: value
            }
        })
    }

    // const callFunc = () => {
    //     if (props.location.state === "Case Tips") {
    //         onClickCategory("Case Tips")
    //         setRef({})
    //         setRef({})
    //     }
    // }

    return (
        <div  >
            <div className="search-box-main-wrapper">
                <form className="search-wrapper mt-3">
                    <div className="form-group">
                        <input placeholder="Search" className="search-text-input form-control" />
                        <i className="fa fa-search search-icon"></i>
                    </div>
                </form>
            </div>
            <div className="main-container">

                <div className="all-action-subcontainer mt-3" >
                {loading ?
                        (actionLibraryData).map((data) => {
                            return (
                                <>
                                    <div className="box-wrapper pt-1 pb-1">
                                        {subName === data.name ?

                                            <div className="all-action-subcontainer-content" >
                                                <i className="material-icons down-icon" >play_arrow</i>
                                                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => onClickCategory(data.name)} >{data.displayName}</div>
                                            </div>


                                            :
                                            <div className="all-action-subcontainer-content" >
                                                <i className="material-icons dropdown-icon" >play_arrow</i>
                                                <div style={{ cursor: "pointer" }} onClick={() => onClickCategory(data.name)} >{data.displayName}</div>
                                            </div>

                                        }
                                        {isSub && subName === data.name ?
                                            subCategory.map((data1) => {

                                                return (
                                                    <div>
                                                        {
                                                            subId == data1.id ?
                                                                <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                                    <i className="material-icons down-icon" >play_arrow</i>
                                                                    <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => onClickSubCategory(data1.id, data.name, data1.name)} >{data1.name}</div>

                                                                </div>


                                                                :
                                                                <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                                                                    <div style={{ cursor: "pointer" }} onClick={() => onClickSubCategory(data1.id, data.name, data1.name)} >{data1.name}</div>

                                                                </div>

                                                        }
                                                        {
                                                            data.name === "Crises" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    //   console.log(data2)
                                                                    return (
                                                                        <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                            <div className="sub-category-circle" ></div>
                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data2.name)} >{data2.name}</div>
                                                                        </div>
                                                                    )
                                                                }) : <></>

                                                        }
                                                        {
                                                            data.name === "Case Tips" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    // console.log(data2)
                                                                    return (
                                                                        <div>
                                                                            <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                <div className="sub-category-circle" ></div>

                                                                                <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>

                                                                            </div>
                                                                            {
                                                                                subsubsub && subsubId === data2.id ?

                                                                                    subsubsubCategory.map((data3) => {
                                                                                        return (
                                                                                            <>
                                                                                                <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                <div onClick={() => handleNewPage(data3.id, data.name, data3.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                    : <></>
                                                                            }
                                                                        </div>

                                                                    )
                                                                }) : <></>
                                                        }
                                                        {
                                                            data.name === "Airway & Equipments" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    // console.log(data2)
                                                                    return (
                                                                        <div>
                                                                            <div>
                                                                                <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                    <div className="sub-category-circle" ></div>
                                                                                    <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>
                                                                                </div>
                                                                                {
                                                                                    subsubsub && subsubId === data2.id ?

                                                                                        subsubsubCategory.map((data3) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                    <div onClick={() => lastLastClick(data3.id, data3.name, data.name, data2.name,)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                    <div>
                                                                                                        {
                                                                                                            sub4 && sub4Id === data3.id ?
                                                                                                                sub4Category.map((data4) => {
                                                                                                                    return (
                                                                                                                        <>
                                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 130, position: "relative", top: 18 }} ></div>
                                                                                                                            <div onClick={() => apiCall(data4.name, data3.name)} style={{ marginLeft: 150 }}>{data4.name}</div>
                                                                                                                        </>
                                                                                                                    )
                                                                                                                })
                                                                                                                : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                        : <></>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }) : <></>
                                                        }
                                                        {
                                                            data.name === "Drugs" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    // console.log(data2)
                                                                    return (
                                                                        <div>
                                                                            <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                <div className="sub-category-circle" ></div>

                                                                                <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.name)}>{data2.name}</div>

                                                                            </div>
                                                                            {
                                                                                subsubsub && subsubId === data2.id ?

                                                                                    subsubsubCategory.map((data3) => {
                                                                                        return (
                                                                                            <>
                                                                                                <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                <div onClick={() => lastLastClick(data3.id, data3.drug_name, data.name, data2.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.drug_name}</div>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                    : <></>
                                                                            }
                                                                        </div>
                                                                    )
                                                                }) : <></>
                                                        }
                                                        {
                                                            data.name === "Regional Anesthesia" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    {/* console.log(data2) */ }

                                                                    return (
                                                                        <div>
                                                                            <div>
                                                                                <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                    <div className="sub-category-circle" ></div>
                                                                                    <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>
                                                                                </div>
                                                                                {
                                                                                    subsubsub && subsubId === data2.id ?

                                                                                        subsubsubCategory.map((data3) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                    <div onClick={() => lastLastClick(data3.id, data2.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                    <div>
                                                                                                        {
                                                                                                            sub4 && sub4Id === data3.id ?
                                                                                                                sub4Category.map((data4) => {
                                                                                                                    console.log(data4)
                                                                                                                    return (
                                                                                                                        <>
                                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 165, position: "relative", top: 18 }} ></div>
                                                                                                                            <div style={{ cursor: "pointer", marginLeft: 180 }} onClick={() => lastestClick(data4.id, data3.id, data4.name, data.name)}>{data4.name}</div>
                                                                                                                        </>
                                                                                                                    )
                                                                                                                })
                                                                                                                : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                        : <></>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }) : <></>
                                                        }
                                                        {
                                                            data.name === "Checklists" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    {/* console.log(data2) */ }
                                                                    return (
                                                                        <div>
                                                                            <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                <div className="sub-category-circle" ></div>

                                                                                <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>

                                                                            </div>
                                                                            {
                                                                                subsubsub && subsubId === data2.id ?

                                                                                    subsubsubCategory.map((data3) => {
                                                                                        return (
                                                                                            <>
                                                                                                <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                <div style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                    : <></>
                                                                            }
                                                                        </div>
                                                                    )
                                                                }) : <></>
                                                        }


                                                        {
                                                            data.name === "Fluids And Transfusions" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    {/* console.log(data2) */ }
                                                                    return (
                                                                        <div>
                                                                            <div>
                                                                                <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                                    <div className="sub-category-circle" ></div>

                                                                                    <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>
                                                                                </div>
                                                                                {
                                                                                    subsubsub && subsubId === data2.id ?

                                                                                        subsubsubCategory.map((data3) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                    <div onClick={() => lastLastClick(data3.id, data2.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                    <div>
                                                                                                        {
                                                                                                            sub4 && sub4Id === data3.id ?
                                                                                                                sub4Category.map((data4) => {
                                                                                                                    return (
                                                                                                                        <>
                                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 165, position: "relative", top: 18 }} ></div>
                                                                                                                            <div style={{ marginLeft: 180 }}>{data4.name}</div>
                                                                                                                        </>
                                                                                                                    )
                                                                                                                })
                                                                                                                : <></>
                                                                                                        }
                                                                                                    </div>
                                                                                                </>
                                                                                            )
                                                                                        })
                                                                                        : <></>
                                                                                }
                                                                            </div>



                                                                        </div>
                                                                    )
                                                                }) : <></>
                                                        }

                                                        {
                                                            data.name === "Calculations And Scores" && subsub && data1.id === subId ?
                                                                subsubCategory.map((data2) => {
                                                                    // console.log(data2)
                                                                    return (
                                                                        <div style={{ marginLeft: 40 }} className="all-action-list-subcontainer-content" >
                                                                            <div className="sub-category-circle" ></div>

                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data2.name)}>{data2.name}</div>
                                                                        </div>

                                                                    )
                                                                }) : <></>
                                                        }


                                                    </div>
                                                )
                                            }) : <></>
                                        }
                                    </div>
                                </>
                            )
                        }):<Spinner/>
                    }
                </div>
            </div>
        </div>


    )
}

export default AllAction
