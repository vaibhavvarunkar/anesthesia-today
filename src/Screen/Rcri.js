import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import { API_ROOT } from '../constants'
import '../css/ApfelScore.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { setCategorySurgeryName } from '../redux/caseSummaryActions'
const Rcri = (props) => {
    const [data, setData] = useState([])
    const [value1, setValue1] = useState([])
    const [result, setResult] = useState([])
    const [green, setGreen] = useState(false)


    console.log(props);

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
    }, [data])

    const getData = async () => {
        var getId = props.location.state
        var token = localStorage.getItem("token")
        var url = API_ROOT + `score-input-fields/${getId}?token=${token}`
        const res = await axios.get(url)
        console.log(res.data.data);
        setData(res.data.data)
    }


    const setInput = (id, val) => {
        console.log(id);
        console.log(val);
        const obj = {
            name: "",
            inputValue: ""
        }

        obj.name = id
        obj.inputValue = val
        value1.push(obj)
    }


    const convertArrayToObject = (array, key) => {
        console.log(array);
        console.log(key);
        const initialValue = {};
        return array.reduce((obj, item) => {
            console.log(obj, item);
            return {
                ...obj,
                [item[key.toLowerCase()]]: item.inputValue,
            };
        }, initialValue);
    };
    const postData = async () => {
        var token = localStorage.getItem("token")
        var requestBody = convertArrayToObject(value1, 'name')
        requestBody.h2o_pressure = "47"
        requestBody.id = "13"
        console.log(requestBody);
        const res = await axios.post(API_ROOT + `risk-score-calculation?token=${token}`, requestBody, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log(requestBody);
        console.log(res);
        if (res.data.status === "true") {
            console.log("run");
            setResult(res.data.data)
            console.log(res.data.data);
        }
        setGreen(true)


    }
    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/riskevalution"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>RCRI</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
                <Link className="arrow" to="/riskevalution"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Risk Evaluation</span></span></Link>Risk Evaluation
                <h4 className="hidn"></h4>
            </div>
            <div>
                {
                    data.length ?
                        data.map((info) => {
                            console.log(info)
                            return (
                                <>
                                    <div className="input-fields">
                                        <h2>{info.score_name}</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6">
                                            {
                                                info.input_fields.map((field) => {
                                                    return (
                                                        <>
                                                            <div className="fields">
                                                                <div className="col-md-6">
                                                                    <h5>{field.field_name}</h5>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input placeholder="Enter Value" onBlur={(e) => setInput(field.field_id, e.target.value)} className="ant-text-input"></input>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="btn-div">
                                        <a onClick={postData} className="save-button-container">Submit</a>
                                    </div>

                                </>

                            )
                        })
                        : <></>
                }
            </div>
            {
                green ?
                    <div className="apfel-score-result-container" >
                        <div className="point-result-container" >
                            O points<br />
                            Class | Risk
                        </div>
                        <div className="percentage-result-container" >
                            {result.map((data) => { return data.A_a_O2_Gradient })} <br />
                            30-day risk of death, MI, or cardiac arrest<br />

                            From Duceppe 2017, based on pooled data from 5 high quality external validations (4 prospective). These numbers are higher than those often quoted from the now-outdated original study (Lee 1999). See Evidence for details.
                        </div>
                    </div>
                    :
                    <></>
            }
            <div className="reference-container" >
                <div>
                    ORIGINAL/PRIMARY REFERENCE
                </div>
                <div className="reference-container-card" >
                    <div className="reference-img" >
                        <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />

                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>

                <div className="reference-container-card" >
                    <div className="reference-img" >
                        <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />

                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>

                <div className="reference-container-card" >
                    <div className="reference-img" >
                        <img src="https://cdn-web-img.mdcalc.com/icons/resource-pubmed.png" alt="Research Paper" />

                    </div>
                    <p className="reference-paragraph" >Lee TH, Marcantonio ER, Mangione CM, Thomas EJ, Polanczyk CA, Cook EF, Sugarbaker DJ, Donaldson MC, Poss R, Ho KK, Ludwig LE, Pedan A, Goldman L. Derivation and prospective validation of a simple index for prediction of cardiac risk of major noncardiac surgery. Circulation. 1999 Sep 7;100(10):1043-9.</p>
                </div>


            </div>


        </div>
    )
}

export default Rcri