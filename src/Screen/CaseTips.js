import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../CustomComponent/Header'
import { API_ROOT } from '../constants'
import Spinner from '../CustomComponent/Spinner'

const CaseTips = (props) => {
    // const burgerMenuClick = () => {
    //     props.history.push('/drawer')
    // }

    const [actionLibraryData, setactionLibraryData] = useState([])
    const [isSub, setSub] = useState(false)
    const [subCategory, setsubCategory] = useState([])
    const [subsubCategory, setsubsubCategory] = useState([])
    const [subsub, setsubsub] = useState(false)
    const [subId, setsubId] = useState(null)
    const [subName, setsubName] = useState(null)
    const [subsubsubCategory, setsubsubsubCategory] = useState([])
    const [subsubId, setsubsubId] = useState(null)
    const [subsubsub, setsubsubsub] = useState(false)
    const [subnewPage, setsubnewPage] = useState(false)
    const [refresh, setrefresh] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getActionLibrary()
    }, [])

    useEffect(() => {

    }, [refresh])

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

                    const obj = [
                        {
                            name: "Case Tips",
                            displayName: "CASE TIPS",
                            data: res.data.caseTips
                        }
                    ]
                    console.log(obj)

                    setactionLibraryData(obj)
                    setLoading(true)
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
                setsubCategory(actionLibraryData[i].data)
                setSub(true)
            }
        }
    }

    const onClickSubCategory = (id, name, drug_name) => {
        console.log("run");
        setsubId(id)
        for (var i = 0; i < subCategory.length; i++) {
            if (subCategory[i].id === id && name === "Case Tips") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].case_tip_sub_type)
            }
        }
    }


    const lastListClicked = (id, dataid, name, drug_name) => {
        console.log(drug_name);
        console.log(id, name);
        setsubsubId(id)
        for (var i = 0; i < subsubCategory.length; i++) {
            if (subsubCategory[i].id === id && name === "Case Tips") {
                // console.log("run");
                setsubsubsub(true)
                subsubCategory[i].case_tip_sub_type.forEach(element => {
                    element.select = false
                });

                setsubsubsubCategory(subsubCategory[i].case_tip_sub_type)
            }
        }
    }


    const [arr, setArr] = useState([])
    console.log(arr);
    const handleCheckboxState = (id, name) => {
        for (var i = 0; i < subsubsubCategory.length; i++) {
            if (subsubsubCategory[i].id === id && subsubsubCategory[i].select === false) {
                subsubsubCategory[i].select = true
                setrefresh({})
            } else if (subsubsubCategory[i].id === id && subsubsubCategory[i].select === true) {
                subsubsubCategory[i].select = false
                setrefresh({})
            }
        }
        arr.push(name)
        setrefresh({})

    }

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


    return (
        <div>{
            loading ?
                <>

                    {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
                    {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>CASE TIPS</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
                    <div className="backNavigation text-center">
                        <Link className="arrow" to="/startacase/actionsummary"><i className="fa fa-chevron-left"></i></Link>CASE TIPS
                        <h4 className="hidn">CRISES</h4>
                    </div>
                    <div className="all-action-subcontainer mt-3" >
                        {
                            actionLibraryData.map((data) => {
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
                                                    console.log(data1)
                                                    console.log(data.name, subsub, subId)
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
                                                                data.name === "Case Tips" && subsub && data1.id === subId ?
                                                                    subsubCategory.map((data2) => {
                                                                        console.log(data2)
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
                                                                                                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
                                                                                                    <div>
                                                                                                        <div className="sub-category-circle" style={{ marginLeft: 95, position: "relative", top: 18 }} ></div>
                                                                                                        <div onClick={() => handleNewPage(data3.id, data.name, data3.name)} style={{ cursor: "pointer", marginLeft: 110 }}>{data3.name}</div>
                                                                                                    </div>
                                                                                                    <div><input onChange={() => handleCheckboxState(data3.id, data3.name)} type="checkbox" /></div>

                                                                                                </div>
                                                                                            )
                                                                                        })
                                                                                        : <></>
                                                                                }
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
                            })
                        }
                    </div>
                    {
                        arr.length > 0 ? <>
                            <h1 style={{ textAlign: "center", marginTop: 10 }}>Selected:</h1>
                            {

                                arr.map((data, i) => {
                                    console.log(data)
                                    return (
                                        <>

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <h5>{i + 1}. {data}</h5>
                                            </div>
                                        </>
                                    )
                                })

                            }
                        </>
                            :
                            <>
                            </>
                    }
                </>
                :
                <Spinner />
        }

        </div>

    )
}

export default CaseTips