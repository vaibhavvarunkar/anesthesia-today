import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/AllActionForActionSummary.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import AllAction from './AllAction'
import ActionSummary from './ActionSummary'
import { Link } from 'react-router-dom'
import { API_ROOT } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { setExtraFavourites, setActionSummaryType, setActionSummaryCategory } from '../redux/FavouriteActions'
import Favorites from './Favorites';
import Spinner from '../CustomComponent/Spinner';
const AllActionForActionSummary = (props) => {
    const [sub4Category, setSub4Category] = useState([])
    const [sub4, setSub4] = useState(false)
    const [sub4Id, setSub4Id] = useState(null)
    const [subsubsub, setsubsubsub] = useState(false)
    const [subsubsubCategory, setsubsubsubCategory] = useState([])
    const [subsubId, setsubsubId] = useState(null)
    const [isSub, setSub] = useState(false)
    const [actionLibraryData, setactionLibraryData] = useState([])
    const [burgerMenu, setburgerMenu] = useState(false)
    const [subCategory, setsubCategory] = useState([])
    const [subsubCategory, setsubsubCategory] = useState([])
    const [subsub, setsubsub] = useState(false)
    const [subId, setsubId] = useState(null)
    const [subName, setsubName] = useState(null)
    const [actionSummaryData, setactionSummaryData] = useState([])
    const [actionSummaryType, setactionSummaryType] = useState(null)
    const [value, setValue] = useState();
    const [isChecked, setisChecked] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const refresh = () => {
        // it re-renders the component
        setValue({});
    }
    useEffect(() => {
        getActionLibrary()
        var urlParams = new URLSearchParams(window.location.search)
        setactionSummaryType(urlParams.get('addinto'))
        dispatch(setActionSummaryType(urlParams.get('addinto')))
    }, [])



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
                    }]

                    console.log(obj)

                    setactionLibraryData(obj);
                    setLoading(true);
                }
            })
    }




    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }

    const onClickCategory = (name) => {
        setsubId(null)
        setsubName(name)
        dispatch(setActionSummaryCategory(name))
        for (var i = 0; i < actionLibraryData.length; i++) {
            if (actionLibraryData[i].name === name) {
                setsubCategory(actionLibraryData[i].data)
                setSub(true)

            }
        }
    }

    const onClickSubCategory = (id, name, drugName) => {
        console.log(name);
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
                    element.name = element.drugName;
                });
                setsubsubCategory(subCategory[i].sub_type)

            } else if (subCategory[i].id === id && name === "Preoperative Evaluation") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)

            } else if (subCategory[i].id === id && name === "Regional Anesthesia") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)

            }
            else if (subCategory[i].id === id && name === "Checklists") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].checklist_sub_type)

            }
            else if (subCategory[i].id === id && name === "Local Anesthesia") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].sub_type)

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
            else if (subsubCategory[i].id === id && name === "Local Anesthesia") {
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
        }
    }

    const handleNewPage = () => {

    }

    const lastLastClick = (id, drug_name, name, subName) => {
        console.log(name);
        console.log(drug_name);
        setSub4Id(id)
        for (var i = 0; i < subsubsubCategory.length; i++) {

            if (subsubsubCategory[i].id === id && name === "Airway & Equipments") {
                console.log("run")
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
            }
            else if (subsubsubCategory[i].id === id && name === "Regional Anesthesia") {
                console.log("run")
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
            }
            else if (subsubsubCategory[i].id === id && name === "Fluids And Transfusions") {
                console.log("run")
                setSub4(true)
                setSub4Category(subsubsubCategory[i].sub_type)
            }
        }
    }

    const lastestClick = () => {

    }




    const sendDataToActionSummary = () => {
        let surgery_histories_data = []
        actionSummaryData.map((data) => {
            console.log(data);
            let obj = {
                name: ''
            }

            obj.name = data
            surgery_histories_data.push(obj)
        })
        dispatch(setExtraFavourites(surgery_histories_data))
        if (actionSummaryType !== "favourite") {
            if (actionSummaryType !== "riskevalution") {
                if (actionSummaryType === "premedication") {
                    props.history.push({
                        pathname: '/premedication',
                        state: { actionSummaryType: actionSummaryType, actionSummary: surgery_histories_data, categorySelected: subName }
                    })

                } else {
                    if (actionSummaryType === "induction") {
                        props.history.push({
                            pathname: '/induction',
                            state: { actionSummaryType: actionSummaryType, actionSummary: surgery_histories_data, categorySelected: subName }
                        })
                    } else {
                        props.history.push({
                            pathname: '/startacase/actionsummary',
                            state: { actionSummaryType: actionSummaryType, actionSummary: surgery_histories_data }
                        })
                    }
                }
            } else {
                props.history.push({
                    pathname: '/riskevalution',
                    state: { actionSummaryType: actionSummaryType, actionSummary: surgery_histories_data, categorySelected: subName }
                })

            }
        } else {
            console.log(subName);
            props.history.push({
                pathname: '/favourite',
                state: { actionSummaryType: actionSummaryType, actionSummary: surgery_histories_data, categorySelected: subName }
            })
        }


    }



    const addintoActionSummary = (value) => {
        console.log(value);
        actionSummaryData.push(value)
        refresh()

    }


    return (
        <div  >
            
            <div className="all-action-container w-100 mt-3" >

                <div className="btn-group">
                    <button className="btn sub-nav active"><Link to='/startacase/casesummary'>
                        CASE SUMMARY
                    </Link>
                    </button>
                    <button className="btn sub-nav">
                        <Link to='/startacase/actionsummary'>
                            ACTION SUMMARY
                        </Link>
                    </button>
                </div>
                <div className="main-container">
                    <div className="w-100 mt-3">
                        <div className="action-library row" >
                            <div className="col-md-6">
                                Action Library
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">

                                <div className="actionsTree-container">
                                {loading ? 
                                        (actionLibraryData).map((data) => {
                                            return (
                                                <div  >
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
                                                            console.log(data1)
                                                            {/* console.log(data.name, subsub, subId) */ }
                                                            {/* console.log(subId) */ }
                                                            return (
                                                                <div>
                                                                    {
                                                                        subId == data1.id ?
                                                                            <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                                                <i className="material-icons down-icon" >play_arrow</i>
                                                                                <div style={{ cursor: "pointer", fontWeight: "bold" }} onClick={() => onClickSubCategory(data1.id, data.name, data1.name)} >{data1.name ? data1.name : data1.drug_name}</div>

                                                                            </div>


                                                                            :
                                                                            <div style={{ marginLeft: 20 }} className="all-action-subcontainer-content" >
                                                                                <i className="material-icons dropdown-icon" >play_arrow</i>
                                                                                <div style={{ cursor: "pointer" }} onClick={() => onClickSubCategory(data1.id, data.name, data1.name)} >{data1.name ? data1.name : data1.drug_name}</div>

                                                                            </div>

                                                                    }

                                                                    {
                                                                        data.name === "Crises" && subsub && data1.id === subId ?
                                                                            subsubCategory.map((data2) => {
                                                                                //   console.log(data2)
                                                                                return (
                                                                                    <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                        <div className="sub-category-circle" ></div>

                                                                                        <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.name)} >{data2.name}</div>
                                                                                        <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>
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
                                                                                        <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                            <div className="sub-category-circle" ></div>

                                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.name)}>{data2.name}</div>
                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                        </div>
                                                                                        {
                                                                                            subsubsub && subsubId === data2.id ?

                                                                                                subsubsubCategory.map((data3) => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                            <div onClick={() => handleNewPage(data3.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
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
                                                                                console.log(data2)
                                                                                return (
                                                                                    <div>
                                                                                        <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                            <div className="sub-category-circle" ></div>

                                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name)}>{data2.name}</div>
                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                        </div>
                                                                                        {
                                                                                            subsubsub && subsubId === data2.id ?

                                                                                                subsubsubCategory.map((data3) => {
                                                                                                    console.log(data3)
                                                                                                    return (
                                                                                                        <>
                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                            <div onClick={() => lastLastClick(data3.id, data2.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                            <div><input onChange={() => addintoActionSummary(data3.name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
                                                                                                            <div>
                                                                                                                {
                                                                                                                    sub4 && sub4Id === data3.id ?
                                                                                                                        sub4Category.map((data4) => {
                                                                                                                            console.log(data4)
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    <div className="sub-category-circle" style={{ marginLeft: 130, position: "relative", top: 18 }} ></div>
                                                                                                                                    <div style={{ marginLeft: 150 }}>{data4.name}</div>
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

                                                                                )
                                                                            }) : <></>
                                                                    }
                                                                    {
                                                                        data.name === "Drugs" && subsub && data1.id === subId ?
                                                                            subsubCategory.map((data2) => {
                                                                                console.log(data2)
                                                                                return (
                                                                                    <div>
                                                                                        <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                            <div className="sub-category-circle" ></div>

                                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.drug_name)}>{data2.drug_name}</div>
                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                        </div>
                                                                                        {
                                                                                            subsubsub && subsubId === data2.id ?

                                                                                                subsubsubCategory.map((data3) => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                            <div onClick={() => lastLastClick(data3.id, data3.drug_name, data.name, data2.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.drug_name}</div>
                                                                                                            <div><input onChange={() => addintoActionSummary(data3.drug_name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
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
                                                                        data.name === "Preoperative Evaluation" && subsub && data1.id === subId ?
                                                                            subsubCategory.map((data2) => {
                                                                                // console.log(data2)
                                                                                return (
                                                                                    <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                        <div className="sub-category-circle" ></div>

                                                                                        <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.name)}>{data2.name}</div>
                                                                                        <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                    </div>

                                                                                )
                                                                            }) : <></>
                                                                    }
                                                                    {
                                                                        data.name === "Regional Anesthesia" && subsub && data1.id === subId ?
                                                                            subsubCategory.map((data2) => {
                                                                                // console.log(data2)
                                                                                return (
                                                                                    <>
                                                                                        <div style={{ marginLeft: 40 }} className="all-action-subcontainer-content-for-subcategory" >
                                                                                            <div className="sub-category-circle" ></div>

                                                                                            <div style={{ cursor: "pointer" }} onClick={() => lastListClicked(data2.id, data1.id, data.name, data2.name)}>{data2.name}</div>
                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                        </div>
                                                                                        {
                                                                                            subsubsub && subsubId === data2.id ?

                                                                                                subsubsubCategory.map((data3) => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                            <div onClick={() => lastLastClick(data3.id, data2.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                            <div><input onChange={() => addintoActionSummary(data3.name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
                                                                                                            <div>
                                                                                                                {
                                                                                                                    sub4 && sub4Id === data3.id ?
                                                                                                                        sub4Category.map((data4) => {
                                                                                                                            console.log(data4)
                                                                                                                            return (
                                                                                                                                <>
                                                                                                                                    <div className="sub-category-circle" style={{ marginLeft: 165, position: "relative", top: 18 }} ></div>
                                                                                                                                    <div style={{ cursor: "pointer", marginLeft: 180 }} onClick={() => lastestClick(data4.id, data3.id, data4.name, data.name)}>{data4.name}</div>
                                                                                                                                    <div><input onChange={() => addintoActionSummary(data4.name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
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
                                                                                    </>

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
                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>

                                                                                        </div>
                                                                                        {
                                                                                            subsubsub && subsubId === data2.id ?

                                                                                                subsubsubCategory.map((data3) => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                            <div style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                            <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>
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
                                                                                                <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>
                                                                                            </div>
                                                                                            {
                                                                                                subsubsub && subsubId === data2.id ?

                                                                                                    subsubsubCategory.map((data3) => {
                                                                                                        return (
                                                                                                            <>
                                                                                                                <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                                <div onClick={() => lastLastClick(data3.id, data2.id, data.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                                <div><input onChange={() => addintoActionSummary(data3.name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
                                                                                                                <div>
                                                                                                                    {
                                                                                                                        sub4 && sub4Id === data3.id ?
                                                                                                                            sub4Category.map((data4) => {
                                                                                                                                return (
                                                                                                                                    <>
                                                                                                                                        <div className="sub-category-circle" style={{ marginLeft: 165, position: "relative", top: 18 }} ></div>
                                                                                                                                        <div style={{ marginLeft: 180 }}>{data4.name}</div>
                                                                                                                                        <div><input onChange={() => addintoActionSummary(data4.name)} style={{ marginLeft: 40, position: "relative", bottom: 22 }} type="checkbox" /></div>
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
                                                                                        <div><input onChange={() => addintoActionSummary(data2.name)} style={{ marginLeft: 40 }} type="checkbox" /></div>
                                                                                    </div>

                                                                                )
                                                                            }) : <></>
                                                                    }


                                                                </div>
                                                            )
                                                        }) : <></>
                                                    }
                                                </div>
                                            )
                                        }):<Spinner/>
                                    }
                                </div>
                            </div>
                            <div className="col-md-3 pt-3 pl-1">{
                                actionSummaryData.length == 0 ? <div className="list-of-action-summary-no-Select">Nothing selected</div> :

                                    actionSummaryData.map((data) => {
                                        return (
                                            <div className="list-of-action-summary" ><span>{data}</span> <i className="fa fa-check addedIcon"></i></div>
                                        )
                                    })
                                    }
                                <hr />
                                <button onClick={() => sendDataToActionSummary()} className="btn submit-button-container" ><i className="fa fa-plus-circle">&nbsp;</i> Add to {actionSummaryType}</button>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AllActionForActionSummary
