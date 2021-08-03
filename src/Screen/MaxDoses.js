import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "../css/Maxdoses.css"
import { setAdminVolume } from '../redux/LamaxActions'

const MaxDoses = (props) => {
    const dose = useSelector(state => state.lamax.dose)
    const conc = useSelector(state => state.lamax.conc)
    const weightType = useSelector(state => state.lamax.weightType)
    const lamaxComorbities = useSelector(state => state.lamax.lamaxComorbities)
    const adminVolume = useSelector(state => state.lamax.adminVolume)
    const AdministrationData = useState([])
    const [value, setValue] = useState([])
    const [refresh, setrefresh] = useState({})
    const dispatch = useDispatch()
    var totalReduction = 0;
    // console.log(lamaxComorbities);
    lamaxComorbities.map((data) => {
        // console.log(data);
        totalReduction = totalReduction + parseInt(data.value) / 100
    })
    // console.log(totalReduction);

    var obj = {
        name: "",
        appResult: "",
        concentrationValue: "",
        type: "",
        administrationValue: ""
    }

    var obj1 = {

    }

    var result;
    var remaining = 0;

    const saveAdminitrationVolume = (dosName, appDose, concentration, doseType, adminValue) => {
        console.log("called");
        obj = {
            name: dosName,
            appResult: appDose,
            concentrationValue: concentration,
            type: doseType,
            administrationValue: adminValue
        }
        AdministrationData.push(obj)

        const consume = (adminValue / appDose) * 100

        if (value.length === 0) {

            obj = {
                name: dosName,
                consume: consume,
                remaining: 100 - consume
            }
            value.push(obj)
            setrefresh({})
        } else {
            console.log(value[value.length - 1].name)
            if (consume <= (100 - value[value.length - 1].consume)) {
                if (value[value.length - 1].name !== dosName) {

                    obj = {
                        name: dosName,
                        consume: consume,
                        remaining: 100 - (consume + value[value.length - 1].consume)
                    }
                    value.push(obj)
                    setrefresh({})
                } else {
                    value[value.length - 1].consume = consume
                    setrefresh({})
                }

            } else {
                alert("please enter administration value less the previous consume...")
            }
        }
    }


    return (
        <>
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/selectcomoribities"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Max Doses</h3>
                </nav>
            </div>
            <div className="structure">
                <div className="max-doses-div">

                    <table>
                        <tr>
                            <th className="text-center"><h4>Max Doses <br></br>(per Anestatic)</h4></th>
                            <th className="text-center"><h4>Administration <br></br> Volume</h4></th>
                        </tr>

                        {dose.map((dos, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {dos.name} {conc[index].value}%<br></br><span>({dos.type})</span> <br></br>
                                        <br></br>
                                        {(((dos.dosageMaxValue * weightType) / conc[index].value) - (((dos.dosageMaxValue * weightType) / conc[index].value) * totalReduction)) / 1000} mL
                                    </td>

                                    <td>
                                        <div className="dose-input text-center">
                                            <input type="number" onBlur={(e) => saveAdminitrationVolume(dos.name, (((dos.dosageMaxValue * weightType) / conc[index].value).toFixed(0) - ((dos.dosageMaxValue * weightType) / conc[index].value).toFixed(0) * totalReduction).toFixed(0) / 1000, conc[index].value * 100, dos.value, e.target.value)} ></input> mL
                                            <br></br>
                                            <br></br>
                                            {value.map((data1, index1) => {
                                                if (data1.name === dos.name) {
                                                    return (
                                                        <>
                                                            <h5>Consumed :{data1.consume}</h5>
                                                            <h5>remaining:{remaining = data1.remaining}</h5>
                                                        </>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            )

                        })}

                    </table>


                </div>
            </div>
            <div className="next-button" onClick={() => {
                props.history.push({
                    pathname: '/aftermaxdoses',
                    state: { remaining: remaining }
                });
            }
            } >NEXT
            </div>
        </>
    )
}

export default MaxDoses
