import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_ROOT } from '../constants'

const AfterAirway = (props) => {
    const [resp, setResp] = useState([])
    const [show, setshow] = useState(false)
    const [resp2, setResp2] = useState([])
    const [show2, setshow2] = useState(false)
    const [resp3, setResp3] = useState([])
    const [show3, setshow3] = useState(false)
    const [resp4, setResp4] = useState([])
    const [show4, setshow4] = useState(false)
    const [resp5, setResp5] = useState([])
    const [show5, setshow5] = useState(false)
    var reqName = props.location.state.name
    var reqValue = props.location.state.value

    useEffect(() => {
        callLma()
    }, [])

    const callLma = async () => {
        console.log(reqName);
        var token = await localStorage.getItem("token")
        if (reqName === "LMA") {
            const body = {
                "lma_size": reqValue
            }
            const res = await Axios.post(API_ROOT + `airway-lma-details?token=${token}`, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (res.data.status === "true") {
                console.log(res.data.data);
                setResp(res.data.data)
                setshow(true)
            }
        }

        else if (reqName === "ET Tube Uncuffed") {
            const body = {
                "et_tube_uncuffed": reqValue
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
        else if (reqName === "ET Tube Cuffed") {
            const body = {
                "et_tube_cuffed": reqValue
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
        else if (reqName === "Double lumen ETT") {
            console.log("run");
            const body = {
                "double_lumen_ett": reqValue
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
        else if (reqName === "Bronchial blocker") {
            const body =
            {

                "bronchial_blocker": reqValue
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
        else if (reqName === "Univent") {
            const body =
            {

                "univent": reqValue
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
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{reqName}</h1>
            {
                show ?
                    <>
                        {
                            resp.map((data) => {
                                console.log(data)
                                return (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            {
                show2 && resp2 ?
                    <>
                        {
                            resp2.map((data) => {
                                return (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            {
                show3 ?
                    <>
                        {
                            resp3.map((data) => {
                                return (
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
        </div>
    )
}

export default AfterAirway
