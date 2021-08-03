import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { defaultProps } from 'react-select/src/Select'
import { API_ROOT } from '../constants'
import '../css/selectcomoribities.css'
import { setLamaxComorbities } from '../redux/LamaxActions'
const SelectComoribities = (props) => {
    const [comorbities, setComorbities] = useState([])
    const [comorbitiesValue, setComorbitiesValue] = useState([])
    const [checked, setChecked] = useState(false);
    const lamaxComorbities = useSelector(state => state.lamax.lamaxComorbities)
    const dispatch = useDispatch()
    useEffect(() => {
        getLAMAXData()

    }, [])


    const getLAMAXData = () => {
        var token = localStorage.getItem('token')
        fetch(API_ROOT + `la-max-drugs?token=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(res => {
                console.log(res.data)
                if (res.status === "true" && res.message === "LA Max Drugs") {
                    setComorbities(res.data.comorbidity)
                } else {
                    alert(res.message)
                }
            })

    }

    var obj = {
        name: "",
        value: "",
        msg: ""
    }

    const onSelectComborbities = (comorbidityName, comorbidityValue, comorbidityMsg) => {
        alert(comorbidityMsg)
        console.log(comorbidityName, comorbidityValue, comorbidityMsg);
        obj = {
            name: comorbidityName,
            value: comorbidityValue,
            msg: comorbidityMsg
        }
        comorbitiesValue.push(obj)
    }


    return (
        <div className="select-comoribities-main-container" >
            <div className="main-div">
                <nav>
                    <Link className="arrow" to="/patientprofile"><h3><i className="fas fa-arrow-left"></i></h3></Link>
                    <h3>Select Comoribities</h3>
                </nav>
            </div>
            <div className="select-comoribities-list-main-container" >
                {comorbities.map((data) => {
                    return (
                        <div className="select-comoribities-list" >
                            <div>{data.comorbidities}</div>
                            <input defaultChecked={checked} onChange={() => { setChecked(!checked); onSelectComborbities(data.comorbidities, data.reduction_per, data.warning_msg) }} type="checkbox"></input>

                        </div>
                    )
                })


                }
            </div>
            <div className="select-comoribities-next-button" onClick={() => {
                props.history.push({
                    pathname: '/maxdoses',
                    state: { comorbitiesValue: comorbitiesValue }
                });
                dispatch(setLamaxComorbities(comorbitiesValue))
            }}>
                CALCULATE DOSAGES
        </div>
        </div>

    )
}

export default SelectComoribities